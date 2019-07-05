using AutoMapper;
using MyLfc.Application.Infrastructure.Profiles;
using MyLiverpool.Common.Mappings.Vm;

namespace MyLiverpool.Common.Mappings
{
    public class MapperConfig
    {
        public static IConfigurationProvider GetConfiration { get; } = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile(new ChatMessageMapperProfile());
            cfg.AddProfile(new ForumMessageMapperProfile());
            cfg.AddProfile(new ForumSectionMapperProfile());
            cfg.AddProfile(new ForumSubsectionMapperProfile());
            cfg.AddProfile(new ForumThemeMapperProfile());
            cfg.AddProfile(new MatchMapperProfile());
            cfg.AddProfile(new MatchEventMapperProfile());
            cfg.AddProfile(new MatchPersonMapperProfile());
            cfg.AddProfile(new MaterialCategoryMapperProfile());
            cfg.AddProfile(new MaterialCommentMapperProfile());
            cfg.AddProfile(new PersonMapperProfile());
            cfg.AddProfile(new PollMapperProfile());
            cfg.AddProfile(new RoleGroupsMapperProfile());
            cfg.AddProfile(new UserMapperProfile());
            cfg.AddProfile(new WishMapperProfile());


            cfg.AddProfile(new UserProfile());
            cfg.AddProfile(new MaterialProfile());
            cfg.AddProfile(new TransferProfile());



            cfg.AddProfile(new CommentVmMapperProfile());
        });
    }
}
