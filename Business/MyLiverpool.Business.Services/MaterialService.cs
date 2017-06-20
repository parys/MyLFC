using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class MaterialService : IMaterialService
    {
        private readonly IMaterialRepository _materialRepository;
        private readonly IMaterialCommentRepository _materialCommentRepository;
        private readonly IMapper _mapper;

        public MaterialService(IMaterialRepository materialRepository, IMapper mapper, IMaterialCommentRepository materialCommentRepository)
        {
            _materialRepository = materialRepository;
            _mapper = mapper;
            _materialCommentRepository = materialCommentRepository;
        }

        #region Dto 
        
        public async Task<PageableData<MaterialMiniDto>> GetDtoAllAsync(MaterialFiltersDto filters)
        {
            var itemPerPage = GlobalConstants.NewsPerPage;
            Expression<Func<Material, bool>> filter = x => true;
            if (!filters.IsInNewsmakerRole)
            {
                filter = filter.And(x => !x.Pending);
            }
            
            if (filters.CategoryId.HasValue)
            {
                filter = filter.And(x => x.CategoryId == filters.CategoryId.Value);
            }
            else
            {
                if (filters.MaterialType != MaterialType.Both)
                {
                    filter = filter.And(x => x.Type == filters.MaterialType);
                }
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
            var newsForView = topNews.Concat(news.OrderByDescending(x => x.AdditionTime));//bug need to research why need to order one more time
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

        public async Task<bool> DeleteAsync(int id, ClaimsPrincipal claims)
        {
            var material = await _materialRepository.GetByIdAsync(id);

            if ((!claims.IsInRole(nameof(RolesEnum.NewsFull)) && material.Type == MaterialType.News) ||
                (!claims.IsInRole(nameof(RolesEnum.BlogFull)) && material.Type == MaterialType.Blogs))
            {
                return false;
            }
            try
            {
                var comments = material.Comments.ToList();
                foreach (var comment in comments)
                {
                    await _materialCommentRepository.DeleteAsync(comment);
                }
                await _materialRepository.DeleteAsync(material);
                await _materialRepository.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        public async Task<bool> ActivateAsync(int id, ClaimsPrincipal claims)
        {
            var material = await _materialRepository.GetByIdAsync(id);
            if (material == null)
            {
                return false;
            }

            if ((!claims.IsInRole(nameof(RolesEnum.NewsFull)) && material.Type == MaterialType.News) ||
                (!claims.IsInRole(nameof(RolesEnum.BlogFull)) && material.Type == MaterialType.Blogs))
            {
                return false;
            }

                material.Pending = false;
            _materialRepository.Update(material);
            await _materialRepository.SaveChangesAsync();
            return true;
        }

        public async Task<MaterialDto> CreateAsync(MaterialDto model, int userId)
        {
            model.AdditionTime = DateTime.Now;
            model.UserId = userId;

            var material = _mapper.Map<Material>(model);
            material.LastModified = DateTime.Now;

            try
            {
                material = await _materialRepository.AddAsync(material);
                await _materialRepository.SaveChangesAsync();
                return _mapper.Map<MaterialDto>(material);
            }
            catch (Exception)
            {
            }
            return null;
        }

        public async Task<MaterialDto> EditAsync(MaterialDto model)
        {
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
            updatingItem.Category = null;
            updatingItem.CategoryId = model.CategoryId;

            try
            {
                _materialRepository.Update(updatingItem);
                await _materialRepository.SaveChangesAsync();
                return _mapper.Map<MaterialDto>(updatingItem);
            }
            catch (Exception)
            {}
            return null;
        }

        public async Task AddViewAsync(int id)
        {
            var item = await _materialRepository.GetByIdAsync(id);
            item.Reads += 1;
            _materialRepository.Update(item);
            await _materialRepository.SaveChangesAsync();
        }

        #endregion
    }
}

