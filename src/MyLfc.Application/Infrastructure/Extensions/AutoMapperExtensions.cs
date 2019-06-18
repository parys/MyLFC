using System.Collections.Generic;
using System.Linq;
using AutoMapper;

namespace MyLfc.Application.Infrastructure.Extensions
{
    public static class AutoMapperExtensions
    {
        public static TDestination MapTo<TDestination>(this object obj)
        {
            return (TDestination)Mapper.Map(obj, obj.GetType(), typeof(TDestination));
        }

        public static IList<TDestination> MapTo<TDestination>(this IEnumerable<object> list)
        {
            return list.Select(el => el.MapTo<TDestination>()).ToList();
        }
    }
}
