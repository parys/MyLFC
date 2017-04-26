using System;

namespace MyLiverpool.Business.Dto
{
    public class UserDto : IDto
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }

        public string UserName { get; set; }

        public string FullName { get; set; }

        public bool? Gender { get; set; }

        public DateTimeOffset RegistrationDate { get; set; }

        public DateTimeOffset LastModifiedOn { get; set; }

        public DateTimeOffset? Birthday { get; set; }

        public string RoleGroupName { get; set; }

        public int RoleGroupId { get; set; }

        public DateTimeOffset? LockoutEnd { get; set; }

        public string Photo { get; set; }

        public int NewsCount { get; set; }

        public int BlogsCount { get; set; }

        public string Ip { get; set; }
    }
}
