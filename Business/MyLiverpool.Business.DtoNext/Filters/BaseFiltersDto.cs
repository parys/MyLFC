namespace MyLiverpool.Business.Dto.Filters
{
    public class BaseFiltersDto : IDto
    {
        public int Page { get; set; } = 1;

        public int ItemsPerPage { get; set; } = 15;
    }
}
