using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using MyLiverpool.Common.Utilities;

namespace MyLfc.Common.Web
{
    public class DistributedCacheManager : IDistributedCacheManager
    {
        private readonly IDistributedCache _distributedCache;

        public DistributedCacheManager(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
        }

        public async void SetAsync<T>(string key, T obj)
        {
            await _distributedCache.SetAsync(key, obj.Serialize());
        }

        public async void SetStringAsync(string key, string obj)
        {
            await _distributedCache.SetStringAsync(key, obj);
        }

        public async Task<T> GetAsync<T>(string key)
        {
            var cacheValue = await _distributedCache.GetAsync(key);
            if (cacheValue != null)
            {
                return cacheValue.Deserialize<T>();
            }

            return default(T);
        }

        public async Task<string> GetStringAsync(string key)
        {
            return await _distributedCache.GetStringAsync(key);
        }

        public async void RemoveAsync(string key)
        {
            await _distributedCache.RemoveAsync(key);
        }

        public async Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> method)
        {
            T result;
            var cached = await _distributedCache.GetAsync(key);
            if (cached != null)
            {
                result = cached.Deserialize<T>();
            }
            else
            {
                result = await (Task<T>)method.DynamicInvoke();
                if (result != null)
                {
                    await _distributedCache.SetAsync(key, result.Serialize());
                }
            }

            return result;
        }

        public async Task<string> GetOrCreateStringAsync(string key, Func<Task<string>> method)
        {
            var cached = await _distributedCache.GetStringAsync(key);
            if (cached != null)
            {
                return cached;
            }
            
            var result = await(Task<string>)method.DynamicInvoke();
            if (string.IsNullOrWhiteSpace(result))
            {
                await _distributedCache.RemoveAsync(key);
            }
            else
            {
                await _distributedCache.SetStringAsync(key, result);
            }

            return result;
        }
    }
}
