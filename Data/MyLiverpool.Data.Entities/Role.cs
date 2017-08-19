using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace MyLiverpool.Data.Entities
{
    public class Role : IdentityRole<int>, IEntity
    {
        public Role()
        {
        //    this.Users = new HashSet<User>();
        //    this.Claims = new HashSet<RoleClaim>();
              RoleRoleGroups = new HashSet<RoleRoleGroup>();
        }

        //public int Id { get; set; }
        //public string Name { get; set; }
        //public string ConcurrencyStamp { get; set; }
        //public string NormalizedName { get; set; }

        //public virtual ICollection<User> Users { get; set; }
        //public virtual ICollection<RoleClaim> Claims { get; set; }

        public virtual ICollection<RoleRoleGroup> RoleRoleGroups {get; set; }

        //public int RoleGroupId { get; set; }
    }
}
