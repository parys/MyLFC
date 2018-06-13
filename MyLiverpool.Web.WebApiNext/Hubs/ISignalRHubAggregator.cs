namespace MyLiverpool.Web.WebApiNext.Hubs
{
    public interface ISignalRHubAggregator
    {
        void Send<T>(string endpoint, T model);

        void Send(string endpoint);
    }
}
