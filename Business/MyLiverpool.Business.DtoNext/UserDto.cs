using System;

namespace MyLiverpool.Business.DtoNext
{
    public class UserDto : IDto
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }

        public string UserName { get; set; }

        public string FullName { get; set; }

        public bool? Gender { get; set; }

        public DateTime RegistrationDate { get; set; }

        public DateTime LastModifiedOn{ get; set; }

        public DateTime? Birthday { get; set; }

        public string RoleGroupName { get; set; }

        public int RoleGroupId { get; set; }

        public DateTime? LockoutEnd { get; set; }

        public string Photo { get; set; }

        public int NewsCount { get; set; }

        public int BlogsCount { get; set; }

        public string Ip { get; set; }
    }
}
