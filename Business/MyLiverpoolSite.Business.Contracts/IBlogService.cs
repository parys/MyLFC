//using System.Threading.Tasks;
//using MyLiverpoolSite.Business.ViewModels.Blogs;
//using MyLiverpoolSite.Data.DataAccessLayer;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Business.Contracts
//{
//    public interface IBlogService
//    {
//        /// <summary>
//        /// Returns newsItem by id.
//        /// </summary>
//        /// <param name="id">newsItem id</param>
//        /// <returns>Found newsItem or null.</returns>
//        Task<IndexBlogVM> GetById(int id);

//        Task<int> Create(CreateEditBlogVM model, int userId);

//        Task<int> Edit(CreateEditBlogVM newsItem);

//        void Delete(BlogItem newsItem);

//        void Delete(int id);

//        Task<CreateEditBlogVM> GetCreateEditViewModel(int? id);

//        Task<PageableData<IndexMiniBlogVM>> GetAll(int page);
//    }
//}
