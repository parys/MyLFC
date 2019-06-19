using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;
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
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        public async Task<MaterialDto> ActivateAsync(int id, ClaimsPrincipal claims)
        {
            var material = await _materialRepository.GetByIdAsync(id);
            if (material == null)
            {
                return null;
            }

            if ((!claims.IsInRole(nameof(RolesEnum.NewsFull)) && material.Type == MaterialType.News) ||
                (!claims.IsInRole(nameof(RolesEnum.BlogFull)) && material.Type == MaterialType.Blogs))
            {
                return null;
            }

            material.Pending = false;
            await _materialRepository.UpdateAsync(material);
            return _mapper.Map<MaterialDto>(material);
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
            updatingItem.PhotoPreview = model.PhotoPreview;
            updatingItem.Source = model.Source;
            updatingItem.Category = null;
            updatingItem.CategoryId = model.CategoryId;
            updatingItem.UsePhotoInBody = model.UsePhotoInBody;
            updatingItem.Tags = model.Tags;

            try
            {
                await _materialRepository.UpdateAsync(updatingItem);
                return _mapper.Map<MaterialDto>(updatingItem);
            }
            catch (Exception)
            {}
            return null;
        }
        
        #endregion
    }
}
