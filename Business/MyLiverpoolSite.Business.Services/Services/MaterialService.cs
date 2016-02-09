using System;
using System.Collections.Generic;
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

namespace MyLiverpoolSite.Business.Services.Services
{
    public class MaterialService : IMaterialService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMaterialCategoryService _materialCategoryService;
        private readonly IMaterialRepository _materialRepository;

        public MaterialService(IUnitOfWork unitOfWork, IMaterialCategoryService materialCategoryService, IMaterialRepository materialRepository)
        {
            _unitOfWork = unitOfWork;
            _materialCategoryService = materialCategoryService;
            _materialRepository = materialRepository;
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
                result = Mapper.Map<IndexNewsViewModel>(newsItem);
            }
            return result;
        }

        public async Task<CreateEditNewsViewModel> GetCreateEditViewModelAsync(int? id, MaterialType materialType)
        {
            CreateEditNewsViewModel viewModel;
            if (id.HasValue && id != 0)
            {
                var newsItem = await _unitOfWork.MaterialRepository.GetByIdAsync(id.Value);
                viewModel = Mapper.Map<CreateEditNewsViewModel>(newsItem);
            }
            else
            {
                viewModel = Mapper.Map<CreateEditNewsViewModel>(new Material());
            }
            viewModel.NewsCategories = await _materialCategoryService.GetCategoriesAsync(materialType);

            return viewModel;
        }

        public void Delete(Material newsItem, MaterialType materialType)
        {
            throw new System.NotImplementedException();
        }

        public async Task<int> EditAsync(CreateEditNewsViewModel model, MaterialType materialType)
        {
            var newsItem = Mapper.Map<Material>(model);
            newsItem.LastModified = DateTime.Now;
            _unitOfWork.MaterialRepository.Update(newsItem);
            await _unitOfWork.SaveAsync();
            return newsItem.Id;
        }

        public async Task<int> CreateVmAsync(CreateEditNewsViewModel model, int userId, MaterialType materialType)
        {
            var newsItem = Mapper.Map<Material>(model);
            newsItem.AdditionTime = DateTime.Now;
            newsItem.LastModified = DateTime.Now;
            newsItem.AuthorId = userId;
            _unitOfWork.MaterialRepository.Add(newsItem);
            await _unitOfWork.SaveAsync();

            return newsItem.Id;
        }

        public async Task<PageableData<IndexMiniNewsVM>> GetAllAsync(int page, int? categoryId, MaterialType materialType)
        {
            // itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<Material, bool>> filter = x => !x.OnTop;
            Expression<Func<Material, bool>> filterForCount = null;
            ICollection<Material> topNews = null;
            if (categoryId.HasValue)
            {
                filter = x => x.CategoryId == categoryId.Value && !x.OnTop;
                filterForCount = x => x.CategoryId == categoryId.Value;
                topNews = await _unitOfWork.MaterialRepository.GetAsync(x => x.OnTop && x.CategoryId == categoryId.Value);
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
            var newsVM = Mapper.Map<IEnumerable<IndexMiniNewsVM>>(newsForView);
            var allNewsCount = await _unitOfWork.MaterialRepository.GetCountAsync(filterForCount);
            var result = new PageableData<IndexMiniNewsVM>(newsVM, page, allNewsCount);
            return result;
        }

        public async Task<IEnumerable<IndexNewsCategoryVM>> GetCategoriesAsync(MaterialType materialType)
        {
            var categories = await _unitOfWork.MaterialCategoryRepository.GetAsync(x => x.MaterialType == materialType);
            var categoriesVM = Mapper.Map<IEnumerable<IndexNewsCategoryVM>>(categories);

            return categoriesVM;
        }
        #endregion

        #region Dto 
        public async Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(int page, int? categoryId, MaterialType materialType)
        {
            var itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<Material, bool>> filter = x => !x.OnTop && x.Type == materialType;
            Expression<Func<Material, bool>> filterForCount = x => x.Type == materialType;
            ICollection<Material> topNews = new List<Material>();
            if (categoryId.HasValue)
            {
                filter = x => x.CategoryId == categoryId.Value && !x.OnTop && x.Type == materialType;
                filterForCount = x => x.CategoryId == categoryId.Value && x.Type == materialType;
                topNews = await _unitOfWork.MaterialRepository.GetAsync(x => x.OnTop && x.CategoryId == categoryId.Value && x.Type == materialType);
            }
            else
            {
                if (page == GlobalConstants.FirstPage)
                {
                    topNews = await _unitOfWork.MaterialRepository.GetAsync(x => x.OnTop && x.Type == materialType);
                }
            }

            if (page == GlobalConstants.FirstPage)
            {
                itemPerPage = GlobalConstants.NewsPerPage - topNews.Count > 0
                    ? GlobalConstants.NewsPerPage - topNews.Count
                    : 0;
            }
            var news = await _unitOfWork.MaterialRepository.GetAsync(page, filter: filter, itemPerPage: itemPerPage);
            var newsForView = topNews.Concat(news);
            var newsVm = Mapper.Map<IEnumerable<MaterialMiniDto>>(newsForView);
            var allNewsCount = await _unitOfWork.MaterialRepository.GetCountAsync(filterForCount);
            var result = new PageableData<MaterialMiniDto>(newsVm, page, allNewsCount);
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
            material.Comments = material.Comments.Where(x => !x.ParentId.HasValue && x.MaterialType == materialType).ToList();
            var dto = Mapper.Map<MaterialDto>(material);
            dto.CommentsCount = commentsCount;
            return dto;
        }

        public async Task<bool> DeleteAsync(int id, int userId, MaterialType materialType)
        {
            var newsItem = await _unitOfWork.MaterialRepository.GetByIdAsync(id);
            var userRoles = await _unitOfWork.UserManager.GetRolesAsync(userId);
            if (!userRoles.Contains(RolesEnum.NewsFull.ToString()) && newsItem.AuthorId != userId)
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
            
            var material = Mapper.Map<Material>(model);
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
            updatingItem.CategoryId = model.NewsCategoryId;

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
