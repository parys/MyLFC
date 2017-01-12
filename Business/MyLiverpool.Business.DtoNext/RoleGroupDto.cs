using System.Collections.Generic;

namespace MyLiverpool.Business.DtoNext
{
    public class RoleGroupDto : IDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<RoleDto> Roles { get; set; }
    }
}
