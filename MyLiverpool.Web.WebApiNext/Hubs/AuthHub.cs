using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;

namespace MyLiverpool.Web.WebApiNext.Hubs
{
    /// <summary>
    /// Hub for athenticated users.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme)]
    public class AuthHub : AnonymHub
    {
        public AuthHub(ISignalRHubAggregator signalRHub) : base(signalRHub)
        {
        }
    }
}
