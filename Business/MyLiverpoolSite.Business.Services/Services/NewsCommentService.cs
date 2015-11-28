using System;
using System.Linq;
using System.Threading.Tasks;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class NewsCommentService : INewsCommentService
    {
        private readonly IUnitOfWork _unitOfWork;

        public NewsCommentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<int> AddCommentAsync(string message, int newsId, int? parentId, int userId)
        {
            var newsComment = new NewsComment()
            {
                NewsItemId = newsId,
                AdditionTime = DateTime.Now,
                AuthorId = userId,
                Message = message,
                Pending = false,
                ParentId = parentId
            };
            _unitOfWork.NewsCommentRepository.Add(newsComment);
            await _unitOfWork.SaveAsync();
            return newsComment.Id;
        }

        public async Task<bool> EditCommentAsync(int commentId, string message, string answer)
        {
            var comment = await _unitOfWork.NewsCommentRepository.GetById(commentId);
            comment.Message = message;
            comment.Answer = answer;
            _unitOfWork.NewsCommentRepository.Update(comment);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var comment = await _unitOfWork.NewsCommentRepository.GetById(id);
            if (comment.Children.Any())
            {
                foreach (var item in comment.Children)
                {
                    item.Parent = comment.Parent;
                }
                comment.Children.ToList().ForEach(x => _unitOfWork.NewsCommentRepository.Update(x));
            }
            await _unitOfWork.NewsCommentRepository.Delete(id);
            await _unitOfWork.SaveAsync();
            return true;
        }
    }
}
