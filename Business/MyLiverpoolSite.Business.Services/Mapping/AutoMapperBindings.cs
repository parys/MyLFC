using System.Collections.Generic;
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

namespace MyLiverpoolSite.Business.Services.Mapping
{
    public class AutoMapperBindings : Profile
    {
        public new static void Configure()
        {
            RegisterNewsCommentMapping();
            RegisterNewsMapping();

            RegisterPrivateMessageMapping();

            RegisterUserMapping();

            RegisterForumThemeMapping();
            RegisterForumSubsectionMapping();
            RegisterForumSectionMapping();

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
                .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName))
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.UserName));

            Mapper.CreateMap<User, UserMiniDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.LastModified, src => src.MapFrom(x => x.LastModified))
                .ForMember(dest => dest.RegistrationDate, src => src.MapFrom(x => x.RegistrationDate))
                .ForMember(dest => dest.RoleGroupName, src => src.MapFrom(x => x.RoleGroup.RussianName))
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.UserName));
        }

        private static void RegisterNewsMapping()
        {
            #region mapper for VM

            AutoMapper.Mapper.CreateMap<IndexNewsViewModel, NewsItem>();
            AutoMapper.Mapper.CreateMap<IndexBlogVM, BlogItem>();

            AutoMapper.Mapper.CreateMap<NewsItem, IndexNewsViewModel>();
            AutoMapper.Mapper.CreateMap<BlogItem, IndexBlogVM>();

            AutoMapper.Mapper.CreateMap<NewsItem, CreateEditNewsViewModel>();
            AutoMapper.Mapper.CreateMap<CreateEditNewsViewModel, NewsItem>();

            AutoMapper.Mapper.CreateMap<BlogItem, CreateEditBlogVM>();
            AutoMapper.Mapper.CreateMap<CreateEditBlogVM, BlogItem>();

            AutoMapper.Mapper.CreateMap<NewsItem, IndexMiniNewsVM>();
            AutoMapper.Mapper.CreateMap<BlogItem, IndexMiniBlogVM>();
            //  Mapper.CreateMap<IndexMiniNewsVM, NewsItem>();

            AutoMapper.Mapper.CreateMap<NewsComment, IndexNewsCommentVM>();
            AutoMapper.Mapper.CreateMap<BlogComment, IndexBlogCommentVM>();
            //    Mapper.CreateMap<IndexNewsCommentVM, NewsComment>();

            AutoMapper.Mapper.CreateMap<User, UserViewModel>();
            // Mapper.CreateMap<IndexNewsCommentVM, NewsComment>();

            AutoMapper.Mapper.CreateMap<ForumSubsection, ForumSubsectionVM>().ForMember(x => x.Themes, y => y.Ignore());
            AutoMapper.Mapper.CreateMap<ForumTheme, ForumThemeVM>().ForMember(x => x.Messages, y => y.Ignore());
            AutoMapper.Mapper.CreateMap<ForumMessage, ForumMessageVM>();

            AutoMapper.Mapper.CreateMap<NewsCategory, IndexNewsCategoryVM>();

            AutoMapper.Mapper.CreateMap<RoleGroup, RoleGroupVM>();
            AutoMapper.Mapper.CreateMap<RoleGroupVM, RoleGroup>();

            AutoMapper.Mapper.CreateMap<Role, RoleVM>();
            AutoMapper.Mapper.CreateMap<RoleVM, Role>();

            AutoMapper.Mapper.CreateMap<PrivateMessage, PrivateMessageVM>();
            AutoMapper.Mapper.CreateMap<PrivateMessageVM, PrivateMessage>();

            #endregion

            Mapper.CreateMap<NewsItem, NewsMiniDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Brief, src => src.MapFrom(x => x.Brief))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.NewsCategoryId, src => src.MapFrom(x => x.NewsCategoryId))
                .ForMember(dest => dest.NewsCategoryName, src => src.MapFrom(x => x.NewsCategory.Name))
                .ForMember(dest => dest.NumberCommentaries, src => src.MapFrom(x => x.Comments.Count))
                .ForMember(dest => dest.Pending, src => src.MapFrom(x => x.Pending))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.PhotoPath, src => src.MapFrom(x => x.PhotoPath))
                .ForMember(dest => dest.Reads, src => src.MapFrom(x => x.Reads));

            Mapper.CreateMap<NewsItem, NewsItemDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.CanCommentary, src => src.MapFrom(x => x.CanCommentary))
                .ForMember(dest => dest.Comments,
                    src => src.MapFrom(x => AutoMapper.Mapper.Map<ICollection<NewsCommentDto>>(x.Comments)))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.NewsCategoryId, src => src.MapFrom(x => x.NewsCategoryId))
                .ForMember(dest => dest.NewsCategoryName, src => src.MapFrom(x => x.NewsCategory.Name))
                //    .ForMember(dest => dest.NumberCommentaries, src => src.MapFrom(x => x.NumberCommentaries))
                .ForMember(dest => dest.Pending, src => src.MapFrom(x => x.Pending))
                .ForMember(dest => dest.Reads, src => src.MapFrom(x => x.Reads))
                .ForMember(dest => dest.Source, src => src.MapFrom(x => x.Source))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title));



        }

        private static void RegisterNewsCommentMapping()
        {
            Mapper.CreateMap<NewsComment, NewsCommentDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Children, src => src.MapFrom(x => x.Children))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message));
        }

        private static void RegisterPrivateMessageMapping()
        {
            Mapper.CreateMap<PrivateMessage, PrivateMessageMiniDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.IsRead, src => src.MapFrom(x => x.IsRead))
                .ForMember(dest => dest.ReceiverId, src => src.MapFrom(x => x.ReceiverId))
                .ForMember(dest => dest.ReceiverUserName, src => src.MapFrom(x => x.Receiver.UserName))
                .ForMember(dest => dest.SenderId, src => src.MapFrom(x => x.SenderId))
                .ForMember(dest => dest.SenderUserName, src => src.MapFrom(x => x.Sender.UserName))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title));

            Mapper.CreateMap<PrivateMessage, PrivateMessageDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.IsRead, src => src.MapFrom(x => x.IsRead))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.ReceiverId, src => src.MapFrom(x => x.ReceiverId))
                .ForMember(dest => dest.ReceiverUserName, src => src.MapFrom(x => x.Receiver.UserName))
                .ForMember(dest => dest.SenderId, src => src.MapFrom(x => x.SenderId))
                .ForMember(dest => dest.SenderUserName, src => src.MapFrom(x => x.Sender.UserName))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title));
        }

        private static void RegisterForumThemeMapping()
        {
            Mapper.CreateMap<ForumTheme, ForumThemeMiniDto>()
               .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
               .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
               .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description));
        }

        private static void RegisterForumSubsectionMapping()
        {
            Mapper.CreateMap<ForumSubsection, ForumSubsectionMiniDto>()
               .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
               .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
               .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description));

            Mapper.CreateMap<ForumSubsection, ForumSubsectionDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Themes, src => src.Ignore());
        }

        private static void RegisterForumSectionMapping()
        {
            Mapper.CreateMap<ForumSection, ForumSectionDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Subsections,
                    src => src.MapFrom(x => Mapper.Map<ICollection<ForumSubsectionMiniDto>>(x.Subsections)));
        }
    }
}
