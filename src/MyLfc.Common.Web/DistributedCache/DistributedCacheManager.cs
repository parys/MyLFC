using System;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using StackExchange.Redis;

namespace MyLfc.Common.Web.DistributedCache
{
    public class DistributedCacheManager : IDistributedCacheManager
    {
        public static string KeyPrefix { get; set; } = "";
        private readonly IDistributedCache _distributedCache;

        public DistributedCacheManager(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
        }

        public async void Set<T>(string key, T obj)
        {
            if (string.IsNullOrWhiteSpace(key) || obj == null)
            {
                return;
            }
            try
            {
                await _distributedCache.SetAsync(KeyPrefix + key, JsonSerializer.SerializeToUtf8Bytes(obj));
            }
            catch (RedisConnectionException)
            {
            }
        }

        public async void SetString(string key, string obj)
        {
            if (string.IsNullOrWhiteSpace(key) || obj == null)
            {
                return;
            }
            try
            {
                await _distributedCache.SetStringAsync(KeyPrefix + key, obj);
            }
            catch (RedisConnectionException)
            {
            }
        }

        public async Task<T> GetAsync<T>(string key)
        {
            try
            {
                var cacheValue = await _distributedCache.GetAsync(KeyPrefix + key);
                if (cacheValue != null)
                {
                    return JsonSerializer.Deserialize<T>(cacheValue);
                }
            }
            catch (RedisConnectionException)
            {
            }

            return default;
        }

        public async Task<string> GetStringAsync(string key)
        {
            try
            {
                return await _distributedCache.GetStringAsync(KeyPrefix + key);
            }
            catch (RedisConnectionException)
            {
            }

            return null;
        }

        public async void Remove(string key)
        {
            try
            {
                await _distributedCache.RemoveAsync(KeyPrefix + key);
            }
            catch (RedisConnectionException)
            {
            }
        }

        public async void Remove(params string[] keys)
        {
            try
            {
                foreach (var key in keys)
                {
                    await _distributedCache.RemoveAsync(KeyPrefix + key);
                }
            }
            catch (RedisConnectionException)
            {
            }
        }

        public async Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> method)
        {
            T result;
            try
            {
                var cached = await _distributedCache.GetAsync(KeyPrefix + key);
                if (cached != null)
                {
                    result = JsonSerializer.Deserialize<T>(cached);
                }
                else
                {
                    result = await (Task<T>)method.DynamicInvoke();
                    if (result != null && !string.IsNullOrWhiteSpace(key))
                    {
                        await _distributedCache.SetAsync(KeyPrefix + key, JsonSerializer.SerializeToUtf8Bytes(result));
                    }
                }
            }
            catch (RedisConnectionException)
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
                var cached = await _distributedCache.GetStringAsync(KeyPrefix + key);
                if (cached != null)
                {
                    return cached;
                }

                result = await (Task<string>)method.DynamicInvoke();
                if (string.IsNullOrWhiteSpace(result) && !string.IsNullOrWhiteSpace(key))
                {
                    await _distributedCache.RemoveAsync(KeyPrefix + key);
                }
                else
                {
                    await _distributedCache.SetStringAsync(KeyPrefix + key, result);
                }
            }
            catch (RedisConnectionException)
            {
                result = await (Task<string>)method.DynamicInvoke();
            }

            return result;
        }
    }
}
