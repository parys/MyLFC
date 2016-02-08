//using System.Collections.Generic;
//using System.Threading.Tasks;
//using MyLiverpoolSite.Business.Contracts;
//using MyLiverpoolSite.Data.DataAccessLayer;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Business.Services.Services
//{
//    public class BlogCategoryService : IBlogCategoryService
//    {
//        private readonly IUnitOfWork _unitOfWork;

//        public BlogCategoryService(IUnitOfWork unitOfWork)
//        {
//            this._unitOfWork = unitOfWork;
//        }

//        public async Task<ICollection<BlogCategory>> GetCategories()
//        {
//            return await _unitOfWork.BlogCategoryRepository.GetAsync();
//        }
//    }
//}
