using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace MyLiverpool.Common.Utilities
{
    public static class BinarySerializerExtensions
    {
        public static async Task<byte[]> SerializeAsync<T>(this T obj)
        {
            await using var memoryStream = new MemoryStream();
            await JsonSerializer.SerializeAsync(memoryStream, obj, typeof(T));
            var bytes = memoryStream.ToArray();
            return bytes;
        }

        public static async Task<T> DeserializeAsync<T>(this byte[] byteArray)
        {
            await using var memoryStream = new MemoryStream(byteArray);
            return await JsonSerializer.DeserializeAsync<T>(memoryStream);
        }
    }
}
