using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Business.ViewModels.NewsCategories;
using MyLiverpoolSite.Common.Utilities;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;
using MyLiverpoolSite.Common.Utilities.Extensions;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;

namespace MyLiverpoolSite.Business.Services.Services
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

        #region VM

        //todo for vm , MaterialType materialType edit
        public async Task<IndexNewsViewModel> GetByIdAsync(int id, MaterialType materialType)
        {
            IndexNewsViewModel result = null;
            if (id > 0)
            {
                var newsItem = await _materialRepository.GetById(id);
                //  result = Mapper.Map<IndexNewsViewModel>(_unitOfWork.MaterialRepository.GetById(id));
                newsItem.Comments = newsItem.Comments.Where(x => !x.ParentId.HasValue).ToList();
                result = _mapper.Map<IndexNewsViewModel>(newsItem);
            }
            return result;
        }

        public void Delete(Material newsItem, MaterialType materialType)
        {
            throw new System.NotImplementedException();
        }

        public async Task<int> EditAsync(CreateEditNewsViewModel model, MaterialType materialType)
        {
            var newsItem = _mapper.Map<Material>(model);
            newsItem.LastModified = DateTime.Now;
            _unitOfWork.MaterialRepository.Update(newsItem);
            await _unitOfWork.SaveAsync();
            return newsItem.Id;
        }

        public async Task<int> CreateVmAsync(CreateEditNewsViewModel model, int userId, MaterialType materialType)
        {
            var newsItem = _mapper.Map<Material>(model);
            newsItem.AdditionTime = DateTime.Now;
            newsItem.LastModified = DateTime.Now;
            newsItem.AuthorId = userId;
            _unitOfWork.MaterialRepository.Add(newsItem);
            await _unitOfWork.SaveAsync();

            return newsItem.Id;
        }

        public async Task<PageableData<IndexMiniNewsVM>> GetAllAsync(int page, int? categoryId,
            MaterialType materialType)
        {
            // itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<Material, bool>> filter = x => !x.OnTop;
            Expression<Func<Material, bool>> filterForCount = null;
            ICollection<Material> topNews = null;
            if (categoryId.HasValue)
            {
                filter = x => x.CategoryId == categoryId.Value && !x.OnTop;
                filterForCount = x => x.CategoryId == categoryId.Value;
                topNews =
                    await _unitOfWork.MaterialRepository.GetAsync(x => x.OnTop && x.CategoryId == categoryId.Value);
            }
            else
            {
                topNews = await _unitOfWork.MaterialRepository.GetAsync(x => x.OnTop);
            }

            // if (page == GlobalConstants.FirstPage)
            // {
            var itemPerPage = GlobalConstants.NewsPerPage - topNews.Count;
            // }
            var news = await _unitOfWork.MaterialRepository.GetAsync(page, filter: filter, itemPerPage: itemPerPage);
            var newsForView = (page == GlobalConstants.FirstPage) ? topNews.Concat(news) : news;
            var newsVM = _mapper.Map<IEnumerable<IndexMiniNewsVM>>(newsForView);
            var allNewsCount = await _unitOfWork.MaterialRepository.GetCountAsync(filterForCount);
            var result = new PageableData<IndexMiniNewsVM>(newsVM, page, allNewsCount);
            return result;
        }

        public async Task<IEnumerable<IndexNewsCategoryVM>> GetCategoriesAsync(MaterialType materialType)
        {
            var categories = await _unitOfWork.MaterialCategoryRepository.GetAsync(x => x.MaterialType == materialType);
            var categoriesVM = _mapper.Map<IEnumerable<IndexNewsCategoryVM>>(categories);

            return categoriesVM;
        }

        #endregion

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
            var newsItem = await _unitOfWork.MaterialRepository.GetByIdAsync(id);
            var userRoles = await _unitOfWork.UserManager.GetRolesAsync(userId);
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

