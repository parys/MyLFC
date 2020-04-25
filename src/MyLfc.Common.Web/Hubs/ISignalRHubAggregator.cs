namespace MyLfc.Common.Web.Hubs
{
    /// <summary>
    /// Provides calls to both hubs.
    /// </summary>
    public interface ISignalRHubAggregator
    {
        /// <summary>
        /// Invoke signalR method with model.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="endpoint"></param>
        /// <param name="model"></param>
        void Send<T>(string endpoint, T model);// where T : IMessagePackObject;

        /// <summary>
        /// Invoke signalR method without model.
        /// </summary>
        /// <param name="endpoint"></param>
        void Send(string endpoint);


        void SendToUser<T>(string endpoint, T obj, int userId);// where T : IMessagePackObject;
    }
}
