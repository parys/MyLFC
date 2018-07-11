using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using MyLiverpool.Common.Utilities;
using StackExchange.Redis;

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
            try
            {
                await _distributedCache.SetAsync(key, obj.Serialize());
            }
            catch (RedisConnectionException ex)
            {
            }
        }

        public async void SetStringAsync(string key, string obj)
        {
            try
            {
                await _distributedCache.SetStringAsync(key, obj);
            }
            catch (RedisConnectionException ex)
            {
            }
        }

        public async Task<T> GetAsync<T>(string key)
        {
            try
            {
                var cacheValue = await _distributedCache.GetAsync(key);
                if (cacheValue != null)
                {
                    return cacheValue.Deserialize<T>();
                }
            }
            catch (RedisConnectionException ex)
            {
            }

            return default(T);
        }

        public async Task<string> GetStringAsync(string key)
        {
            try
            {
                return await _distributedCache.GetStringAsync(key);
            }
            catch (RedisConnectionException ex)
            {
            }

            return null;
        }

        public async void RemoveAsync(string key)
        {
            try
            {
                await _distributedCache.RemoveAsync(key);
            }
            catch (RedisConnectionException ex)
            {
            }
        }

        public async Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> method)
        {
            T result;
            try
            {
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
            }
            catch (RedisConnectionException ex)
            {
                result = await (Task<T>)method.DynamicInvoke();
            }

            return result;
        }

        public async Task<string> GetOrCreateStringAsync(string key, Func<Task<string>> method)
        {
            string result;
            try
            {
                var cached = await _distributedCache.GetStringAsync(key);
                if (cached != null)
                {
                    return cached;
                }

                result = await (Task<string>)method.DynamicInvoke();
                if (string.IsNullOrWhiteSpace(result))
                {
                    await _distributedCache.RemoveAsync(key);
                }
                else
                {
                    await _distributedCache.SetStringAsync(key, result);
                }
            }
            catch (RedisConnectionException ex)
            {
                result = await (Task<string>)method.DynamicInvoke();
            }

            return result;
        }
    }
}
