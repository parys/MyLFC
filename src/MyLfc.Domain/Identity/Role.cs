using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace MyLfc.Domain.Identity;

public class Role : IdentityRole<int>, IEntity
{
    //public int Id { get; set; }
    //public string Name { get; set; }
    //public string ConcurrencyStamp { get; set; }
    //public string NormalizedName { get; set; }

    //public ICollection<User> Users { get; set; }
    //public ICollection<RoleClaim> Claims { get; set; }

    public ICollection<RoleRoleGroup> RoleRoleGroups { get; set; } = new HashSet<RoleRoleGroup>();

    //public int RoleGroupId { get; set; }
}
