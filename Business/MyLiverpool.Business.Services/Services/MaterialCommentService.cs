using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Business.Services.Services
{
    public class MaterialCommentService : IMaterialCommentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        private const int ItemPerPage = 15; // todo move away

        public MaterialCommentService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> AddCommentAsync(string message, int newsId, int? parentId, int userId, MaterialType materialType)
        {
            var comment = new MaterialComment()
            {
                MaterialId = newsId,
                AdditionTime = DateTime.Now,
                AuthorId = userId,
                Message = message,
                Pending = false,
                ParentId = parentId,
                MaterialType = materialType
            };
            _unitOfWork.MaterialCommentRepository.Add(comment);
            await _unitOfWork.SaveAsync();
            return comment.Id;
        }

        public async Task<bool> EditCommentAsync(int commentId, string message, string answer, MaterialType materialType)
        {
            var comment = await _unitOfWork.MaterialCommentRepository.GetByIdAsync(commentId);
            comment.Message = message;
            comment.Answer = answer;
            _unitOfWork.MaterialCommentRepository.Update(comment);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(int id, MaterialType materialType)
        {
            var comment = await _unitOfWork.MaterialCommentRepository.GetByIdAsync(id);
            if (comment.Children.Any())
            {
                foreach (var item in comment.Children)
                {
                    item.Parent = comment.Parent;
                }
                comment.Children.ToList().ForEach(x => _unitOfWork.MaterialCommentRepository.Update(x));
            }
            await _unitOfWork.MaterialCommentRepository.DeleteAsync(id);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<MaterialCommentDto> AddAsync(MaterialCommentEditingDto model, MaterialType materialType)
        {
            var comment = _mapper.Map<MaterialComment>(model);
            comment.MaterialType = materialType;
            comment.AdditionTime = DateTime.Now;
            comment.LastModified = DateTime.Now;
            comment.IsVerified = false;
            try
            {
                _unitOfWork.MaterialCommentRepository.Add(comment);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                throw new Exception();
            }
            var result = _mapper.Map<MaterialCommentDto>(comment);
            return result;
        }

        public async Task<bool> EditAsync(MaterialCommentEditingDto model, MaterialType materialType)
        {
            var comment = await _unitOfWork.MaterialCommentRepository.GetByIdAsync(model.Id);
            comment.LastModified = DateTime.Now;
            comment.Answer = model.Answer;
            comment.Message = model.Message;
            comment.IsVerified = false;
            try
            {
                _unitOfWork.MaterialCommentRepository.Update(comment);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<PageableData<MaterialCommentDto>> GetListAsync(int page, bool onlyUnverified)
        {
            Expression<Func<MaterialComment, bool>> filter = x => true;
            if (onlyUnverified)
            {
                filter = filter.And(x => !x.IsVerified);
            }
            var comments = await _unitOfWork.MaterialCommentRepository.GetAsync(page, ItemPerPage, filter);
            var commentDtos = _mapper.Map<IEnumerable<MaterialCommentDto>>(comments);
            var commentsCount = await _unitOfWork.MaterialCommentRepository.GetCountAsync(filter);
            return new PageableData<MaterialCommentDto>(commentDtos, page, commentsCount);
        }

        public async Task<bool> VerifyAsync(int id)
        {
            var comment = await _unitOfWork.MaterialCommentRepository.GetByIdAsync(id);
            comment.IsVerified = true;
            comment.LastModified = DateTime.Now;
            _unitOfWork.MaterialCommentRepository.Update(comment);
            await _unitOfWork.SaveAsync();
            return true;
        }
    }
}
