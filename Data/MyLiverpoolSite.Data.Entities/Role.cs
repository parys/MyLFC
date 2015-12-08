using System.Collections.Generic;
using Microsoft.AspNet.Identity.EntityFramework;

namespace MyLiverpoolSite.Data.Entities
{
    public partial class Role : IdentityRole<int, UserRole>, IEntity
    {
        public Role()
        {
        //    this.Users = new HashSet<User>();
        //    this.Claims = new HashSet<RoleClaim>();
              RoleGroups = new HashSet<RoleGroup>();
        }

        //public int Id { get; set; }
        //public string Name { get; set; }
        //public string ConcurrencyStamp { get; set; }
        //public string NormalizedName { get; set; }

        //public virtual ICollection<User> Users { get; set; }
        //public virtual ICollection<RoleClaim> Claims { get; set; }

        public virtual ICollection<RoleGroup> RoleGroups {get; set; }

        //public int RoleGroupId { get; set; }
    }
}
