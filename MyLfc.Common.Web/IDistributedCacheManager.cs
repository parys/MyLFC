using System;
using System.Threading.Tasks;

namespace MyLfc.Common.Web
{
    public interface IDistributedCacheManager
    {
        void SetAsync<T>(string key, T obj);

        void SetStringAsync(string key, string obj);

        Task<T> GetAsync<T>(string key);

        Task<string> GetStringAsync(string key);

        void RemoveAsync(string key);

        Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> method);

        Task<string> GetOrCreateStringAsync(string key, Func<Task<string>> method);
    }
}
