namespace MyLfc.Domain;

public class RoleRoleGroup //temporary for non MtoM in ef core
{
    public int RoleId { get; set; }

    public Role Role { get; set; }

    public int RoleGroupId { get; set; }

    public RoleGroup RoleGroup { get; set; }
}
