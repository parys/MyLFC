//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using AutoMapper;
//using MyLiverpoolSite.Business.Contracts;
//using MyLiverpoolSite.Business.ViewModels.Blogs;
//using MyLiverpoolSite.Data.DataAccessLayer;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Business.Services.Services
//{
//    public class BlogService : IBlogService
//    {
//        private readonly IUnitOfWork _unitOfWork;
//        private readonly IBlogCategoryService _blogCategoryService;

//        public BlogService(IUnitOfWork unitOfWork, IBlogCategoryService blogCategoryService)
//        {
//            _unitOfWork = unitOfWork;
//            _blogCategoryService = blogCategoryService;
//        }

//        public async Task<IndexBlogVM> GetById(int id)
//        {
//            IndexBlogVM result = null;
//            if (id > 0)
//            {
//                var blogItem = await _unitOfWork.BlogItemRepository.GetByIdAsync(id);
//                blogItem.Comments = blogItem.Comments.Where(x => !x.ParentId.HasValue).ToList();
//                result = Mapper.Map<IndexBlogVM>(blogItem);
//            }
//            return result;
//        }

//        public void Delete(int id)
//        {
//            throw new System.NotImplementedException();
//        }

//        public async Task<CreateEditBlogVM> GetCreateEditViewModel(int? id)
//        {
//            CreateEditBlogVM viewModel;
//            if (id.HasValue && id != 0)
//            {
//                var newsItem = await _unitOfWork.BlogItemRepository.GetByIdAsync(id.Value);
//                viewModel = Mapper.Map<CreateEditBlogVM>(newsItem);
//            }
//            else
//            {
//                viewModel = Mapper.Map<CreateEditBlogVM>(new Material());
//            }
//            viewModel.BlogCategories = await _blogCategoryService.GetCategories();

//            return viewModel;
//        }

//        public void Delete(BlogItem blogItem)
//        {
//            throw new NotImplementedException();
//        }

//        public async Task<int> Edit(CreateEditBlogVM model)
//        {
//            var blogItem = Mapper.Map<BlogItem>(model);
//            blogItem.LastModified = DateTime.Now;
//            _unitOfWork.BlogItemRepository.Update(blogItem);
//            await _unitOfWork.SaveAsync();
//            return blogItem.Id;
//        }

//        public async Task<int> Create(CreateEditBlogVM model, int userId)
//        {
//            var blogItem = Mapper.Map<BlogItem>(model);
//            blogItem.AdditionTime = DateTime.Now;
//            blogItem.LastModified = DateTime.Now;
//            blogItem.AuthorId = userId;
//            _unitOfWork.BlogItemRepository.Add(blogItem);
//            await _unitOfWork.SaveAsync();

//            return blogItem.Id;
//        }

//        public async Task<PageableData<IndexMiniBlogVM>> GetAll(int page)
//        {
//            var blogs = await _unitOfWork.BlogItemRepository.GetAsync(page);
//            var blogsVM = Mapper.Map<IEnumerable<IndexMiniBlogVM>>(blogs);
//            var allNewsCount = await _unitOfWork.BlogItemRepository.GetCountAsync();
//            var result = new PageableData<IndexMiniBlogVM>(blogsVM, page, allNewsCount);
//            return result;
//        }
//    }
//}
