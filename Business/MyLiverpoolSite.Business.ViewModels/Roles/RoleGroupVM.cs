using System.Collections.Generic;

namespace MyLiverpoolSite.Business.ViewModels.Roles
{
    public class RoleGroupVM
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string RussianName { get; set; }

        public virtual ICollection<RoleVM> Roles { get; set; }

    }
}
