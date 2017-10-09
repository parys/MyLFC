using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using Newtonsoft.Json;

namespace MyLiverpool.Web.WebApiNext.Hubs
{
    /// <summary>
    /// Contains all signalR methods.
    /// </summary>
    public class LfcHub : Hub
    {
        //private static readonly ConnectionMapping<string> _connections =
        //    new ConnectionMapping<string>();

        private readonly IChatMessageService _chatMessageService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="chatMessageService"></param>
        public LfcHub(IChatMessageService chatMessageService)
        {
            _chatMessageService = chatMessageService;
        }
        
        [Authorize]
        public async void SendChatMessage(ChatMessageDto chatMessage)
        {
          //  var chatMessage1 = JsonConvert.DeserializeObject<ChatMessageDto>(chatMessage);
          //  var result = await _chatMessageService.CreateAsync(chatMessage1);
          //  if (result != null)
            {
                await Clients.All.InvokeAsync("SendChat", chatMessage);
            }
        }
    }
}
