using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MaterialService : IMaterialService
    {
        private readonly IMaterialRepository _materialRepository;
        private readonly IMaterialCommentRepository _materialCommentRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public MaterialService(IMaterialRepository materialRepository, IMapper mapper, IMaterialCommentRepository materialCommentRepository, IUserRepository userRepository)
        {
            _materialRepository = materialRepository;
            _mapper = mapper;
            _materialCommentRepository = materialCommentRepository;
            _userRepository = userRepository;
        }

        #region Dto 
        
        public async Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(MaterialFiltersDto filters)
        {
            var itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<Material, bool>> filter = x => x.Type == filters.MaterialType;
            if (filters.CategoryId.HasValue)
            {
                filter = filter.And(x => x.CategoryId == filters.CategoryId.Value);
            }

            if (!string.IsNullOrWhiteSpace(filters.UserName))
            {
                Expression<Func<Material, bool>> newFilter = x => x.Author.UserName.Contains(filters.UserName);
                filter = filter.And(newFilter);
            }

            ICollection<Material> topNews = new List<Material>();
            if (filters.Page == GlobalConstants.FirstPage)
            {
                topNews = await _materialRepository.GetTopMaterialsAsync(filter);

                itemPerPage = GlobalConstants.NewsPerPage - topNews.Count > 0
                    ? GlobalConstants.NewsPerPage - topNews.Count
                    : 0;
            }

            var allNewsCount = await _materialRepository.GetCountAsync(filter);
            
            var news =
                await
                    _materialRepository.GetOrderedByDescAndNotTopAsync(filters.Page, itemPerPage, filter,
                        x => x.AdditionTime);
            var newsForView = topNews.Concat(news);
            var newsDtos = _mapper.Map<IEnumerable<MaterialMiniDto>>(newsForView);
            var result = new PageableData<MaterialMiniDto>(newsDtos, filters.Page, allNewsCount);
            return result;
        }

        public async Task<MaterialDto> GetDtoAsync(int id)
        {
            var material = await _materialRepository.GetByIdAsync(id);
            if (material == null)
            {
                return null;
            }
            
            var dto = _mapper.Map<MaterialDto>(material);
            return dto;
        }

        public async Task<bool> DeleteAsync(int id, int userId)
        {
            var newsItem = await _materialRepository.GetByIdAsync(id);
            var userRoles = await _userRepository.GetRolesAsync(userId);
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
                    await _materialCommentRepository.DeleteAsync(comment);
                }
                await _materialRepository.DeleteAsync(newsItem);
                await _materialRepository.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        public async Task<bool> ActivateAsync(int id)
        {
            var material = await _materialRepository.GetByIdAsync(id);
            if (material == null)
            {
                return false;
            }
            material.Pending = false;
            _materialRepository.Update(material);
            await _materialRepository.SaveChangesAsync();
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
                material = await _materialRepository.AddAsync(material);
                await _materialRepository.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> EditAsync(MaterialDto model, int userId)
        {
            // var newsItem = Mapper.Map<Material>(model);
            var updatingItem = await _materialRepository.GetByIdAsync(model.Id);
            updatingItem.LastModified = DateTime.Now;
            updatingItem.Brief = model.Brief;
            updatingItem.Title = model.Title;
            updatingItem.Message = model.Message;
            updatingItem.CanCommentary = model.CanCommentary;
            updatingItem.OnTop = model.OnTop;
            updatingItem.Pending = model.Pending;
            updatingItem.PhotoPath = model.Photo;
            updatingItem.Source = model.Source;
            updatingItem.CategoryId = model.CategoryId;

            try
            {
                _materialRepository.Update(updatingItem);
                await _materialRepository.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> AddViewAsync(int id)
        {
            var item = await _materialRepository.GetByIdAsync(id);
            item.Reads += 1;
            _materialRepository.Update(item);
            await _materialRepository.SaveChangesAsync();
            return true;
        }

        #endregion
    }
}

