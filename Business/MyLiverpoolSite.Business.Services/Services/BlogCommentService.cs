//using System;
//using System.Threading.Tasks;
//using MyLiverpoolSite.Business.Contracts;
//using MyLiverpoolSite.Data.DataAccessLayer;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Business.Services.Services
//{
//    public class BlogCommentService : IBlogCommentService
//    {
//        private readonly IUnitOfWork _unitOfWork;

//        public BlogCommentService(IUnitOfWork unitOfWork)
//        {
//            _unitOfWork = unitOfWork;
//        }

//        public async Task<int> AddParentComment(string comment, int blogId, int? parentId, int userId)
//        {
//            var blogComment = new BlogComment
//            {
//                BlogItemId = blogId,
//                AdditionTime = DateTime.Now,
//                AuthorId = userId,
//                Message = comment,
//                Pending = false,
//                ParentId = parentId
//            };
//            _unitOfWork.BlogCommentRepository.Add(blogComment);
//            await _unitOfWork.SaveAsync();
//            return blogComment.Id;
//        }
//    }
//}
