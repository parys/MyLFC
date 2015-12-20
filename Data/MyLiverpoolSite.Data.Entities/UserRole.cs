using Microsoft.AspNet.Identity.EntityFramework;

namespace MyLiverpoolSite.Data.Entities
{
    public class UserRole : IdentityUserRole<int>, IEntity
    {
    //    [Key]
    //    public string UserId { get; set; }
    //    public string RoleId { get; set; }
        public int Id { get; set; }
    }
}
