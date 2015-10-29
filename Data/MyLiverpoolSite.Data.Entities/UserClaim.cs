using Microsoft.AspNet.Identity.EntityFramework;

namespace MyLiverpoolSite.Data.Entities
{
    public partial class UserClaim : IdentityUserClaim<int>
    {
        //public int Id { get; set; }
        //public string UserId { get; set; }
        //public string ClaimType { get; set; }
        //public string ClaimValue { get; set; }

        public virtual User User { get; set; }

    }
}
