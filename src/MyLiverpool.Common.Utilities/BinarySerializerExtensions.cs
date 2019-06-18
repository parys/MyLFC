using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;

namespace MyLiverpool.Common.Utilities
{
    //todo think try protobuff?
    public static class BinarySerializerExtensions
    {
        public static byte[] Serialize(this object obj)
        {
            byte[] bytes;
            using (var memoryStream = new MemoryStream())
            {
                IFormatter binaryFormatter = new BinaryFormatter();
                binaryFormatter.Serialize(memoryStream, obj);
                bytes = memoryStream.ToArray();
            }
            return bytes;
        }

        public static T Deserialize<T>(this byte[] byteArray)
        {
            T returnValue;
            using (var memoryStream = new MemoryStream(byteArray))
            {
                IFormatter binaryFormatter = new BinaryFormatter();
                returnValue = (T)binaryFormatter.Deserialize(memoryStream);
            }
            return returnValue;
        }
    }
}
