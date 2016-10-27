using System;
using System.Security.Claims;

namespace MyLiverpool.Web.WebApiNext.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static int GetUserId(this ClaimsPrincipal principal)
        {
            if (principal == null)
                throw new ArgumentNullException(nameof(principal));
            var claim = principal.FindFirst(ClaimTypes.NameIdentifier);
            if (claim != null)
            {
                return int.Parse(claim.Value);
            }
            throw new UnauthorizedAccessException("problem with getUserId");
        }
    }
}
