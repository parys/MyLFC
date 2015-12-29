using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyLiverpool.Business.DTO
{
    public class UserMiniDto : IDto
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public DateTime RegistrationDate { get; set; }

        public DateTime LastModified { get; set; }

        public string RoleGroupName { get; set; }
    }
}
