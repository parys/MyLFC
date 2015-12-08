using System.Collections.Generic;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpoolSite.Business.ViewModels.Roles
{
    public class RoleRoleGroupVM
    {
        public PageableData<RoleGroupVM> RoleGroups { get; set; } 

        public ICollection<RoleVM> Roles { get; set; } 
    }
}
