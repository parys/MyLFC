using System;
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

        public async Task<int> AddParentComment(string comment, int newsId, int? parentId, int userId)
        {
            var newsComment = new NewsComment()
            {
                NewsItemId = newsId,
                AdditionTime = DateTime.Now,
                AuthorId = userId,
                Message = comment,
                Pending = false,
                ParentId = parentId
            };
            _unitOfWork.NewsCommentRepository.Add(newsComment);
            await _unitOfWork.SaveAsync();
            return newsComment.Id;
        }
    }
}
