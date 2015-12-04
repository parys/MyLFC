using System;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.Users
{
    public class UserViewModel
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string FullName { get; set; }

        public bool? Gender { get; set; }

        public string Email { get; set; }

        public string Homepage { get; set; }

        public DateTime RegistrationDate { get; set; }

        public string Ip { get; set; }

        public DateTime? Birthday { get; set; }

        public bool Verify { get; set; }

        public DateTime LastModified { get; set; }

        public RoleGroup RoleGroup { get; set; }
    }
}
