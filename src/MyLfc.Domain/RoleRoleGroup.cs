using MyLfc.Domain.Identity;

namespace MyLfc.Domain;

public class RoleRoleGroup
{
    public int RoleId { get; set; }

    public Role Role { get; set; }

    public int RoleGroupId { get; set; }

    public RoleGroup RoleGroup { get; set; }
}
