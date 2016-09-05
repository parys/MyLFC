using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Business.Services.Services
{
    public class MaterialService : IMaterialService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMaterialRepository _materialRepository;
        private readonly IMapper _mapper;

        public MaterialService(IUnitOfWork unitOfWork, IMaterialRepository materialRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _materialRepository = materialRepository;
            _mapper = mapper;
        }

        #region Dto 

        public async Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(int page, int? categoryId, string userName,
            MaterialType materialType)
        {
            var itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<Material, bool>> filter = x =>  x.Type == materialType;
            ICollection<Material> topNews = new List<Material>();
            if (categoryId.HasValue)
            {
                filter = filter.And(x => x.CategoryId == categoryId.Value);
            }

            if (!string.IsNullOrWhiteSpace(userName))
            {
                Expression<Func<Material, bool>> newFilter = x => x.Author.UserName.Contains(userName);
                filter = filter.And(newFilter);
            }

            var filterForTop = filter.And(x => x.OnTop);
            topNews =
                await
                    _unitOfWork.MaterialRepository.GetAsync(filterForTop);

            if (page == GlobalConstants.FirstPage)
            {
                itemPerPage = GlobalConstants.NewsPerPage - topNews.Count > 0
                    ? GlobalConstants.NewsPerPage - topNews.Count
                    : 0;
            }

            var allNewsCount = await _unitOfWork.MaterialRepository.GetCountAsync(filter);
            filter = filter.And(x => !x.OnTop);
            var news =
                await
                    _unitOfWork.MaterialRepository.GetOrderedByAsync(page, itemPerPage, SortOrder.Descending, filter,
                        x => x.AdditionTime);
            var newsForView = topNews.Concat(news);
            var newsDtos = _mapper.Map<IEnumerable<MaterialMiniDto>>(newsForView);
            var result = new PageableData<MaterialMiniDto>(newsDtos, page, allNewsCount);
            return result;
        }

        public async Task<MaterialDto> GetDtoAsync(int id, MaterialType materialType)
        {
            var material = await _unitOfWork.MaterialRepository.GetByIdAsync(id);
            if (material == null)
            {
                return null;
            }
            //todo newsCounter
            var commentsCount = material.Comments.Count;
            material.Comments =
                material.Comments.Where(x => !x.ParentId.HasValue && x.MaterialType == materialType).ToList();
            var dto = _mapper.Map<MaterialDto>(material);
            dto.CommentsCount = commentsCount;
            return dto;
        }

        public async Task<bool> DeleteAsync(int id, int userId, MaterialType materialType)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            var newsItem = await _unitOfWork.MaterialRepository.GetByIdAsync(id);
            var userRoles = await _unitOfWork.UserManager.GetRolesAsync(user);
            if (!userRoles.Contains(RolesEnum.NewsFull.ToString()) &&
                !userRoles.Contains(RolesEnum.BlogFull.ToString()) &&
                newsItem.AuthorId != userId)
            {
                return false;
            }
            try
            {
                var comments = newsItem.Comments.ToList();
                foreach (var comment in comments)
                {
                    await _unitOfWork.MaterialCommentRepository.DeleteAsync(comment);
                }
                await _unitOfWork.MaterialRepository.DeleteAsync(newsItem);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        public async Task<bool> ActivateAsync(int id, MaterialType materialType)
        {
            var material = await _unitOfWork.MaterialRepository.GetByIdAsync(id);
            if (material == null)
            {
                return false;
            }
            material.Pending = false;
            _unitOfWork.MaterialRepository.Update(material);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<bool> CreateAsync(MaterialDto model, int userId, MaterialType materialType)
        {
            model.AdditionTime = DateTime.Now;
            model.AuthorId = userId;

            var material = _mapper.Map<Material>(model);
            material.LastModified = DateTime.Now;
            material.Type = materialType;
            try
            {
                _unitOfWork.MaterialRepository.Add(material);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> EditAsync(MaterialDto model, int userId, MaterialType materialType)
        {
            // var newsItem = Mapper.Map<Material>(model);
            var updatingItem = await _unitOfWork.MaterialRepository.GetByIdAsync(model.Id);
            updatingItem.LastModified = DateTime.Now;
            updatingItem.Brief = model.Brief;
            updatingItem.Title = model.Title;
            updatingItem.Message = model.Message;
            updatingItem.CanCommentary = model.CanCommentary;
            updatingItem.OnTop = model.OnTop;
            updatingItem.Pending = model.Pending;
            updatingItem.PhotoPath = model.PhotoPath;
            updatingItem.Source = model.Source;
            updatingItem.CategoryId = model.CategoryId;

            try
            {
                _unitOfWork.MaterialRepository.Update(updatingItem);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> AddViewAsync(int id, MaterialType materialType)
        {
            var item = await _unitOfWork.MaterialRepository.GetByIdAsync(id);
            item.Reads += 1;
            _unitOfWork.MaterialRepository.Update(item);
            await _unitOfWork.SaveAsync();
            return true;
        }

        #endregion
    }
}

