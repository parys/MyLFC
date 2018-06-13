using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using MyLiverpool.Web.WebApiNext.OnlineCounting;

namespace MyLiverpool.Web.WebApiNext.Hubs
{
    /// <summary>
    /// Contains all signalR methods.
    /// </summary>
    [AllowAnonymous]
    public class AnonymHub : Hub
    {
        private readonly ISignalRHubAggregator _signalRHub;
        /// <summary>
        /// Constructor.
        /// </summary>
        public AnonymHub(ISignalRHubAggregator signalRHub)
        {
            _signalRHub = signalRHub;
        }

        /// <inheritdoc />
        /// <summary>
        /// Calls when user connected.
        /// </summary>
        /// <returns></returns>
        public override Task OnConnectedAsync()
        {
            if (Context.User.Identity.IsAuthenticated)
            {
                var model = new OnlineCounterModel
                {
                    Id = int.Parse(Context.User.Claims.First(x => x.Type == "sub").Value),
                    UserName = Context.User.Identity.Name
                };
                OnlineCounter.CurrentOnlineV2.AddOrUpdate(Context.ConnectionId, model,
                    (k, v) => model);
            }
            else 
            {
                OnlineCounter.CurrentOnlineGuestsV2.Add(Context.ConnectionId);
            }

            _signalRHub.Send(HubEndpointConstants.UsersOnlineEndpoint, OnlineCounter.GetStats());
            return base.OnConnectedAsync();
        }

        /// <inheritdoc />
        /// <summary>
        /// Calls when user disconnected.
        /// </summary>
        /// <returns></returns>
        public override Task OnDisconnectedAsync(Exception ex)
        {
            if (Context.User.Identity.IsAuthenticated)
            {
                OnlineCounter.CurrentOnlineV2.TryRemove(Context.ConnectionId, out var value);
            }
            else
            {
                var conntectionId = Context.ConnectionId;
                OnlineCounter.CurrentOnlineGuestsV2.TryTake(out conntectionId);
            }
            _signalRHub.Send(HubEndpointConstants.UsersOnlineEndpoint, OnlineCounter.GetStats());
            return base.OnConnectedAsync();
        }
    }
}
