using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class RoleGroup: IEntity
    {
        public RoleGroup()
        {
            RoleGroups = new HashSet<RoleRoleGroup>();
            Users = new HashSet<User>();
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public string RussianName { get; set; }

        public virtual ICollection<RoleRoleGroup> RoleGroups { get; set; } 

        public virtual ICollection<User> Users { get; set; } 
    }
}
