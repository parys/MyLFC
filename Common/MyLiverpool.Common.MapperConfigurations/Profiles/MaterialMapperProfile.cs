using System.Collections.Generic;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.ViewModels.Forum;
using MyLiverpoolSite.Business.ViewModels.News;
using MyLiverpoolSite.Business.ViewModels.NewsCategories;
using MyLiverpoolSite.Business.ViewModels.NewsComments;
using MyLiverpoolSite.Business.ViewModels.Roles;
using MyLiverpoolSite.Business.ViewModels.Users;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class MaterialMapperProfile : Profile
    {
        private readonly IMapperConfiguration _cfg;

        public MaterialMapperProfile(IMapperConfiguration cfg)
        {
            _cfg = cfg;
        }

        protected override void Configure()
        {
            RegisterMaterialCommentMapping();
            RegisterMaterialMapping();
            RegisterMaterialCategoriesMapping();
        }

        private void RegisterMaterialMapping()
        {
            #region mapper for VM

            _cfg.CreateMap<IndexNewsViewModel, Material>();
            //     AutoMapper.Mapper.CreateMap<IndexBlogVM, BlogItem>();

            _cfg.CreateMap<Material, IndexNewsViewModel>();
            //    AutoMapper.Mapper.CreateMap<BlogItem, IndexBlogVM>();

            _cfg.CreateMap<Material, CreateEditNewsViewModel>();
            _cfg.CreateMap<CreateEditNewsViewModel, Material>();

            //     AutoMapper.Mapper.CreateMap<BlogItem, CreateEditBlogVM>();
            //     AutoMapper.Mapper.CreateMap<CreateEditBlogVM, BlogItem>();

            _cfg.CreateMap<Material, IndexMiniNewsVM>();
            //     AutoMapper.Mapper.CreateMap<BlogItem, IndexMiniBlogVM>();
            //  Mapper.CreateMap<IndexMiniNewsVM, Material>();

            _cfg.CreateMap<MaterialComment, IndexNewsCommentVM>();
            //     AutoMapper.Mapper.CreateMap<BlogComment, IndexBlogCommentVM>();
            //    Mapper.CreateMap<IndexNewsCommentVM, NewsComment>();

            _cfg.CreateMap<User, UserViewModel>();
            // Mapper.CreateMap<IndexNewsCommentVM, NewsComment>();

            _cfg.CreateMap<ForumSubsection, ForumSubsectionVM>().ForMember(x => x.Themes, y => y.Ignore());
            _cfg.CreateMap<ForumTheme, ForumThemeVM>().ForMember(x => x.Messages, y => y.Ignore());
            _cfg.CreateMap<ForumMessage, ForumMessageVM>();

            _cfg.CreateMap<MaterialCategory, IndexNewsCategoryVM>();

            _cfg.CreateMap<RoleGroup, RoleGroupVM>();
            _cfg.CreateMap<RoleGroupVM, RoleGroup>();

            _cfg.CreateMap<Role, RoleVM>();
            _cfg.CreateMap<RoleVM, Role>();

            _cfg.CreateMap<PrivateMessage, PrivateMessageVM>();
            _cfg.CreateMap<PrivateMessageVM, PrivateMessage>();

            #endregion

            _cfg.CreateMap<Material, MaterialMiniDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Brief, src => src.MapFrom(x => x.Brief))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.NewsCategoryId, src => src.MapFrom(x => x.CategoryId))
                .ForMember(dest => dest.NewsCategoryName, src => src.MapFrom(x => x.Category.Name))
                .ForMember(dest => dest.CommentsCount, src => src.MapFrom(x => x.Comments.Count))
                .ForMember(dest => dest.Pending, src => src.MapFrom(x => x.Pending))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.PhotoPath, src => src.MapFrom(x => x.PhotoPath))
                .ForMember(dest => dest.Reads, src => src.MapFrom(x => x.Reads));

            _cfg.CreateMap<Material, MaterialDto>() //todo maybe separate for edit model
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Brief, src => src.MapFrom(x => x.Brief))
                .ForMember(dest => dest.CanCommentary, src => src.MapFrom(x => x.CanCommentary))
                .ForMember(dest => dest.Comments,
                    src => src.MapFrom(x => x.Comments))//todo
                    .ForMember(dest => dest.CommentsCount, src => src.Ignore())
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.NewsCategoryId, src => src.MapFrom(x => x.CategoryId))
                .ForMember(dest => dest.NewsCategoryName, src => src.MapFrom(x => x.Category.Name))
                .ForMember(dest => dest.OnTop, src => src.MapFrom(x => x.OnTop))
                .ForMember(dest => dest.Pending, src => src.MapFrom(x => x.Pending))
                .ForMember(dest => dest.Reads, src => src.MapFrom(x => x.Reads))
                .ForMember(dest => dest.Source, src => src.MapFrom(x => x.Source))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title));

            _cfg.CreateMap<MaterialDto, Material>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime.Value))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.Brief, src => src.MapFrom(x => x.Brief))
                .ForMember(dest => dest.CanCommentary, src => src.MapFrom(x => x.CanCommentary))
                .ForMember(dest => dest.Comments, src => src.Ignore())
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.CategoryId, src => src.MapFrom(x => x.NewsCategoryId))
                .ForMember(dest => dest.OnTop, src => src.MapFrom(x => x.OnTop))
                .ForMember(dest => dest.Pending, src => src.MapFrom(x => x.Pending))
                .ForMember(dest => dest.Reads, src => src.MapFrom(x => x.Reads))
                .ForMember(dest => dest.Source, src => src.MapFrom(x => x.Source))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title));
        }

        private void RegisterMaterialCommentMapping()
        {
            _cfg.CreateMap<MaterialComment, MaterialCommentDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Photo, src => src.MapFrom(x => x.Author.Photo))
                .ForMember(dest => dest.Children, src => src.MapFrom(x => x.Children))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.NewsItemId, src => src.MapFrom(x => x.MaterialId))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message));

            _cfg.CreateMap<MaterialCommentEditingDto, MaterialComment>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Answer, src => src.MapFrom(x => x.Answer))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.MaterialId, src => src.MapFrom(x => x.NewsItemId))
                .ForMember(dest => dest.ParentId, src => src.MapFrom(x => x.ParentId));
        }

        private void RegisterMaterialCategoriesMapping()
        {
            _cfg.CreateMap<MaterialCategory, MaterialCategoryDto>()
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.ItemsCount, src => src.MapFrom(x => x.Materials.Count))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id));
        }
    }
}
