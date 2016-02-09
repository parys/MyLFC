using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class MaterialCommentService : IMaterialCommentService
    {
        private readonly IUnitOfWork _unitOfWork;

        public MaterialCommentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
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
            var comment = Mapper.Map<MaterialComment>(model);
            comment.MaterialType = materialType;
            comment.AdditionTime = DateTime.Now;

            try
            {
                _unitOfWork.MaterialCommentRepository.Add(comment);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                throw new Exception();
            }
            var result = Mapper.Map<MaterialCommentDto>(comment);
            return result;
        }

        public async Task<bool> EditAsync(MaterialCommentEditingDto model, MaterialType materialType)
        {
            var comment = await _unitOfWork.MaterialCommentRepository.GetByIdAsync(model.Id);
           // comment.LastModified = DateTime.Now;
            comment.Answer = model.Answer;
            comment.Message = model.Message;
         //todo   comment.MaterialType = materialType;

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
    }
}
