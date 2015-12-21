using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class RoleGroup: IEntity
    {
        public RoleGroup()
        {
            Roles = new HashSet<Role>();
            Users = new HashSet<User>();
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public string RussianName { get; set; }

        public virtual ICollection<Role> Roles { get; set; } 

        public virtual ICollection<User> Users { get; set; } 
    }
}
