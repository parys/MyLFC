using Microsoft.AspNetCore.SignalR;

namespace MyLiverpool.Web.WebApiNext.Hubs
{
    public class SignalRHubAggregator : ISignalRHubAggregator
    {
        private readonly IHubContext<AnonymHub> _anonymHub;
        private readonly IHubContext<AuthHub> _authHub;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="anonymHub"></param>
        /// <param name="authHub"></param>
        public SignalRHubAggregator(IHubContext<AnonymHub> anonymHub, IHubContext<AuthHub> authHub)
        {
            _anonymHub = anonymHub;
            _authHub = authHub;
        }

        /// <summary>
        /// Notify clients with model.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="endpoint"></param>
        /// <param name="model"></param>
        /// <returns></returns>
        public async void Send<T>(string endpoint, T model)
        {
            await _anonymHub.Clients.All.SendAsync(endpoint, model);
            await _authHub.Clients.All.SendAsync(endpoint, model);
        }

        /// <summary>
        /// Only notify.
        /// </summary>
        /// <param name="endpoint"></param>
        /// <returns></returns>
        public async void Send(string endpoint)
        {
            await _anonymHub.Clients.All.SendAsync(endpoint);
            await _authHub.Clients.All.SendAsync(endpoint);
        }
    }

    public sealed class HubEndpointConstants
    {
        public const string ChatEndpoint = "UpdateChat";
        public const string UsersOnlineEndpoint = "UpdateOnline";
    }
}
