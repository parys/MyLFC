using System.Security.Claims;

namespace MyLfc.Application.Infrastructure;

public class RequestContext
{
    public int? UserId { get; set; }

    public ClaimsPrincipal User { get; set; }
}
