using System.Collections.Generic;

namespace MyLiverpool.Business.Dto
{
    public class RoleGroupDto : IDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string RussianName { get; set; }
        public ICollection<RoleDto> Roles { get; set; }
    }
}
