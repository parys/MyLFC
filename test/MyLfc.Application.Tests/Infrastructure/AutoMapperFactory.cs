using AutoMapper;
using MyLfc.Application.Infrastructure.Profiles;
using MyLiverpool.Common.Mappings;

namespace MyLfc.Application.Tests.Infrastructure
{
    public static class AutoMapperFactory
    {
        public static IMapper Create()
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddMaps(typeof(MaterialProfile), typeof(ClubMapperProfile));
            });

            return mappingConfig.CreateMapper();
        }
    }
}
