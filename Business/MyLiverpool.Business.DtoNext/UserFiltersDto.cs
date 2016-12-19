namespace MyLiverpool.Business.DtoNext
{
    public class UserFiltersDto : IDto
    {
        public int Page { get; set; } = 1;

        public int? RoleGroupId { get; set; }

        public string UserName { get; set; }
    }
}
