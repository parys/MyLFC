using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace MyLfc.Application.Infrastructure.Extensions
{
    public static class QueryableExtensions
    {
        ///// <summary>
        ///// Asynchronously does any sort and gets one page of results with model type.
        ///// </summary>
        ///// <typeparam name="TEntity">Type of source</typeparam>
        ///// <typeparam name="TDto">Type of destination target results</typeparam>
        ///// <param name="source">Data source</param>
        ///// <param name="query">Paged query</param>
        ///// <param name="mapper">AutoMapper instance</param>
        ///// <returns></returns>
        //public static async Task<PagedResult<TDto>> GetPagedAsync<TEntity, TDto>(this IQueryable<TEntity> source,
        //                                    PagedQueryBase query,
        //                                    IMapper mapper) where TDto : class
        //{

        //    if (!string.IsNullOrEmpty(query.SortOn) && !string.IsNullOrEmpty(query.SortDirection))
        //    {
        //        source = query.SortDirection.ToUpper() == "ASC" ? source.OrderBy(query.SortOn) : source.OrderByDescending(query.SortOn);
        //    }

        //    return new PagedResult<TDto>
        //    {
        //        CurrentPage = query.CurrentPage,
        //        PageSize = query.PageSize,
        //        RowCount = await source.CountAsync(),
        //        Results = await source.Skip(query.SkipCount()).Take(query.PageSize).ProjectTo<TDto>(mapper.ConfigurationProvider).ToListAsync()
        //    };
        //}

        /// <summary>
        /// Asynchronously does any sort and gets one page of results with model type.
        /// </summary>
        /// <typeparam name="TResponse">Type of response</typeparam>
        /// <typeparam name="TEntity">Type of source</typeparam>
        /// <typeparam name="TDto">Type of destination target results</typeparam>
        /// <param name="source">Data source</param>
        /// <param name="query">Paged query</param>
        /// <param name="mapper">AutoMapper instance</param>
        /// <param name="customSortBy"></param>
        /// <returns></returns>
        public static async Task<TResponse> GetPagedAsync<TResponse, TEntity, TDto>(this IQueryable<TEntity> source,
            PagedQueryBase query, IMapper mapper, Expression<Func<TEntity, object>> customSortBy = null)
            where TDto : class where TResponse : PagedResult<TDto>, new()
        {
            if (!string.IsNullOrEmpty(query.SortDirection))
            {
                if (customSortBy != null)
                {
                    source = query.SortDirection.ToUpper() == "ASC"
                        ? source.OrderBy(customSortBy)
                        : source.OrderByDescending(customSortBy);
                }
                else if (!string.IsNullOrEmpty(query.SortOn))
                {
                    source = query.SortDirection.ToUpper() == "ASC"
                        ? source.OrderBy(query.SortOn)
                        : source.OrderByDescending(query.SortOn);
                }
            }

            return new TResponse
            {
                CurrentPage = query.CurrentPage,
                PageSize = query.PageSize,
                RowCount = await source.CountAsync(),
                Results = await source.Skip(query.SkipCount()).Take(query.PageSize).ProjectTo<TDto>(mapper.ConfigurationProvider).ToListAsync()
            };
        }

        /// <summary>
        /// Does ascending ordering by property name
        /// </summary>
        /// <typeparam name="T">Type of source</typeparam>
        /// <param name="source">Data source</param>
        /// <param name="propertyName">Sort on field</param>
        /// <returns>Paged result</returns>
        public static IOrderedQueryable<T> OrderBy<T>(this IQueryable<T> source, string propertyName)
        {
            return source.OrderBy(ToLambda<T>(propertyName));
        }

        /// <summary>
        /// Does descending ordering by property name
        /// </summary>
        /// <typeparam name="T">Type of source</typeparam>
        /// <param name="source">Data source</param>
        /// <param name="propertyName">Sort on field</param>
        /// <returns>Paged result</returns>
        public static IOrderedQueryable<T> OrderByDescending<T>(this IQueryable<T> source, string propertyName)
        {
            return source.OrderByDescending(ToLambda<T>(propertyName));
        }

        /// <summary>
        /// Compiles object property name to object expression
        /// </summary>
        /// <typeparam name="T">Type of source</typeparam>
        /// <param name="propertyName">Property name</param>
        /// <returns>Compiled expression</returns>
        private static Expression<Func<T, object>> ToLambda<T>(string propertyName)
        {
            var parameter = Expression.Parameter(typeof(T));
            var property = Expression.Property(parameter, propertyName);
            var propAsObject = Expression.Convert(property, typeof(object));

            return Expression.Lambda<Func<T, object>>(propAsObject, parameter);
        }
    }
}
