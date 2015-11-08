using System;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class NewsCommentService : INewsCommentService
    {
        private readonly IUnitOfWork _unitOfWork;

        public NewsCommentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public bool AddParentComment(string comment, int newsId, int userId)
        {
            throw new NotImplementedException();
        }
    }
}
