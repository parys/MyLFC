using System;
using System.Threading.Tasks;

namespace MyLfc.Common.Web.DistributedCache
{
    public class DisabledCacheManager : IDistributedCacheManager
    {
        public void Set<T>(string key, T obj) { }

        public void SetString(string key, string obj) { }

        public async Task<T> GetAsync<T>(string key)
        {
            return default(T);
        }

        public async Task<string> GetStringAsync(string key)
        {
            return null;
        }

        public void Remove(string key){}

        public async Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> method)
        {
            return await (Task<T>)method.DynamicInvoke();
        }

        public async Task<string> GetOrCreateStringAsync(string key, Func<Task<string>> method)
        {
             return await (Task<string>)method.DynamicInvoke();
        }
    }
}
