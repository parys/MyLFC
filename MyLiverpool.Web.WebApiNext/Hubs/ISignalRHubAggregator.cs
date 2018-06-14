namespace MyLiverpool.Web.WebApiNext.Hubs
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
        void Send<T>(string endpoint, T model);

        /// <summary>
        /// Invoke signalR method without model.
        /// </summary>
        /// <param name="endpoint"></param>
        void Send(string endpoint);
    }
}
