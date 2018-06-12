using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Web.WebApiNext.Hubs
{
    /// <summary>
    /// Contains all signalR methods.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme)]
    public class MiniChatHub : Hub
    {
        /// <summary>
        /// Current connected authed users.
        /// </summary>
        public static ConcurrentDictionary<string, string> Connections = new ConcurrentDictionary<string, string>();

        //private static readonly ConnectionMapping<string> _connections =
        //    new ConnectionMapping<string>();

        /// <summary>
        /// Constructor.
        /// </summary>
        public MiniChatHub()
        {
        }
        
        /// <summary>
        /// Sends to clients new chat message.
        /// </summary>
        /// <param name="chatMessage"></param>
      //  [Authorize]
        public async void SendChatMessageAsync(ChatMessageDto chatMessage)
        {
          //  var chatMessage1 = JsonConvert.DeserializeObject<ChatMessageDto>(chatMessage);
          //  var result = await _chatMessageService.CreateAsync(chatMessage1);
          //  if (result != null)
            {
                await Clients.All.SendAsync("SendMiniChat", chatMessage);
            }
        }
        
        /// <inheritdoc />
        /// <summary>
        /// Calls when user connected.
        /// </summary>
        /// <returns></returns>
        public override Task OnConnectedAsync()
        {
            if (!Connections.ContainsKey(Context.ConnectionId))
            {
                Connections.TryAdd(Context.ConnectionId,
                    Context.User.Identity.IsAuthenticated ? Context.User.Identity.Name : null);
            }
            return base.OnConnectedAsync();
        }

        /// <inheritdoc />
        /// <summary>
        /// Calls when user disconnected.
        /// </summary>
        /// <returns></returns>
        public override Task OnDisconnectedAsync(Exception ex)
        {
            Connections.TryRemove(Context.ConnectionId, out var value);
            return base.OnConnectedAsync();
        }
    }
}
