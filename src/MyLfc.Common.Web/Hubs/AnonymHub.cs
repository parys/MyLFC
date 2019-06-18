using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using MyLfc.Common.Web.OnlineCounting;

namespace MyLfc.Common.Web.Hubs
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
                    UserName = Context.User.Identity.Name,
                    ConnectionId = Context.ConnectionId
                };
                OnlineUsers.CurrentOnline.AddOrUpdate(Context.ConnectionId, model,
                    (k, v) => model);
            }
            else 
            {
                OnlineUsers.CurrentOnlineGuests.Add(Context.ConnectionId);
            }

            _signalRHub.Send(HubEndpointConstants.UsersOnlineEndpoint, OnlineUsers.GetStats());
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
                OnlineUsers.CurrentOnline.TryRemove(Context.ConnectionId, out var value);
            }
            else
            {
                var connectionId = Context.ConnectionId;
                OnlineUsers.CurrentOnlineGuests.TryTake(out connectionId);
            }
            _signalRHub.Send(HubEndpointConstants.UsersOnlineEndpoint, OnlineUsers.GetStats());
            return base.OnConnectedAsync();
        }
    }
}
