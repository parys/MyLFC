using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace MyLfc.Common.Web.Hubs;

/// <summary>
/// Hub for authenticated users.
/// </summary>
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class AuthHub : AnonymHub
{
    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="signalRHub"></param>
    public AuthHub(ISignalRHubAggregator signalRHub) : base(signalRHub)
    {
    }
}
