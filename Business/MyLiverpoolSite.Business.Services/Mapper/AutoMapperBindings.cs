using System.Security.Cryptography.X509Certificates;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.ViewModels.BlogComments;
using MyLiverpoolSite.Business.ViewModels.Blogs;
using MyLiverpoolSite.Business.ViewModels.Forum;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Business.ViewModels.NewsCategories;
using MyLiverpoolSite.Business.ViewModels.NewsComments;
using MyLiverpoolSite.Business.ViewModels.Roles;
using MyLiverpoolSite.Business.ViewModels.Users;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services
{
    public class AutoMapperBindings : Profile
    {
        public new static void Configure()
        {
            RegisterNewsMapping();
            RegisterUserMapping();
        }

        private static void RegisterUserMapping()
        {
            Mapper.CreateMap<User, UserDto>()
                .ForMember(dest => dest.Birthday, src => src.MapFrom(x => x.Birthday))
                .ForMember(dest => dest.FullName, src => src.MapFrom(x => x.FullName))
                .ForMember(dest => dest.Gender, src => src.MapFrom(x => x.Gender))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.LockoutEndDateUtc, src => src.MapFrom(x => x.LockoutEndDateUtc))
                .ForMember(dest => dest.RegistrationDate, src => src.MapFrom(x => x.RegistrationDate))
                .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.Name));
        }

        private static void RegisterNewsMapping()
        {
#region mapper for VM
            Mapper.CreateMap<IndexNewsViewModel, NewsItem>();
            Mapper.CreateMap<IndexBlogVM, BlogItem>();

            Mapper.CreateMap<NewsItem, IndexNewsViewModel>();
            Mapper.CreateMap<BlogItem, IndexBlogVM>();

            Mapper.CreateMap<NewsItem, CreateEditNewsViewModel>();
            Mapper.CreateMap<CreateEditNewsViewModel, NewsItem>();

            Mapper.CreateMap<BlogItem, CreateEditBlogVM>();
            Mapper.CreateMap<CreateEditBlogVM, BlogItem>();

            Mapper.CreateMap<NewsItem, IndexMiniNewsVM>();
            Mapper.CreateMap<BlogItem, IndexMiniBlogVM>();
            //  Mapper.CreateMap<IndexMiniNewsVM, NewsItem>();

            Mapper.CreateMap<NewsComment, IndexNewsCommentVM>();
            Mapper.CreateMap<BlogComment, IndexBlogCommentVM>();
            //    Mapper.CreateMap<IndexNewsCommentVM, NewsComment>();

            Mapper.CreateMap<User, UserViewModel>();
            // Mapper.CreateMap<IndexNewsCommentVM, NewsComment>();

            Mapper.CreateMap<ForumSubsection, ForumSubsectionVM>().ForMember(x => x.Themes, y => y.Ignore());
            Mapper.CreateMap<ForumTheme, ForumThemeVM>().ForMember(x => x.Messages, y => y.Ignore());
            Mapper.CreateMap<ForumMessage, ForumMessageVM>();

            Mapper.CreateMap<NewsCategory, IndexNewsCategoryVM>();

            Mapper.CreateMap<RoleGroup, RoleGroupVM>();
            Mapper.CreateMap<RoleGroupVM, RoleGroup>();

            Mapper.CreateMap<Role, RoleVM>();
            Mapper.CreateMap<RoleVM, Role>();

            Mapper.CreateMap<PrivateMessage, PrivateMessageVM>();
            Mapper.CreateMap<PrivateMessageVM, PrivateMessage>();
#endregion

            Mapper.CreateMap<NewsItem, NewsMiniDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Brief, src => src.MapFrom(x => x.Brief))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.NewsCategoryId, src => src.MapFrom(x => x.NewsCategoryId))
                .ForMember(dest => dest.NewsCategoryName, src => src.MapFrom(x => x.NewsCategory.Name))
                .ForMember(dest => dest.NumberCommentaries, src => src.MapFrom(x => x.NumberCommentaries))
                .ForMember(dest => dest.Pending, src => src.MapFrom(x => x.Pending))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.PhotoPath, src => src.MapFrom(x => x.PhotoPath))
                .ForMember(dest => dest.Reads, src => src.MapFrom(x => x.Reads));

        }
    }
}
