using AutoMapper;
using MyLfc.Application.Infrastructure.Profiles;
using MyLfc.Common.Mappings;

namespace MyLfc.Application.Tests.Infrastructure
{
    public static class AutoMapperFactory
    {
        public static IMapper Create()
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddMaps(typeof(MaterialProfile), typeof(ForumMessageMapperProfile));
            });

            return mappingConfig.CreateMapper();
        }
    }
}
