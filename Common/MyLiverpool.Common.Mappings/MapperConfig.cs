using AutoMapper;
using MyLiverpool.Common.MapperConfigs;

namespace MyLiverpool.Common.Mappings
{
    public class MapperConfig
    {
        public static IConfigurationProvider GetConfiration { get; } = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile(new ChatMessageMapperProfile());
            cfg.AddProfile(new ClubMapperProfile());
            cfg.AddProfile(new ForumMessageMapperProfile());
            cfg.AddProfile(new ForumSectionMapperProfile());
            cfg.AddProfile(new ForumSubsectionMapperProfile());
            cfg.AddProfile(new ForumThemeMapperProfile());
            cfg.AddProfile(new MatchMapperProfile());
            cfg.AddProfile(new MaterialMapperProfile());
            cfg.AddProfile(new MaterialCategoryMapperProfile());
            cfg.AddProfile(new MaterialCommentMapperProfile());
            cfg.AddProfile(new PmMapperProfile());
            cfg.AddProfile(new RoleGroupsMapperProfile());
            cfg.AddProfile(new UserMapperProfile());
            cfg.AddProfile(new WishMapperProfile());
        });
    }
}
