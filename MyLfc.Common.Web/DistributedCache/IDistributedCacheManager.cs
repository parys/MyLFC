using System;
using System.Threading.Tasks;

namespace MyLfc.Common.Web.DistributedCache
{
    public interface IDistributedCacheManager
    {
        void Set<T>(string key, T obj);

        void SetString(string key, string obj);

        Task<T> GetAsync<T>(string key);

        Task<string> GetStringAsync(string key);

        void Remove(string key);

        Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> method);

        Task<string> GetOrCreateStringAsync(string key, Func<Task<string>> method);
    }
}
