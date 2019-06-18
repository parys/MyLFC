using MyLfc.Common.Web.MessagePack;

namespace MyLfc.Common.Web.Hubs
{
    public class EmptyHubAggregator : ISignalRHubAggregator
    {
        public void Send<T>(string endpoint, T model)// where T : IMessagePackObject
        {
        }

        public void Send(string endpoint)
        {
        }

        public void SendToUser<T>(string endpoint, T obj, int userId)// where T : IMessagePackObject
        {
        }
    }
}
