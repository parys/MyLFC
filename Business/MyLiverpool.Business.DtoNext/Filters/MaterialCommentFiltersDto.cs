namespace MyLiverpool.Business.Dto.Filters
{
    public class MaterialCommentFiltersDto : IDto
    {
        public int Page { get; set; } = 1;

       // public int? CategoryId { get; set; }

        public int? UserId { get; set; }

        public bool OnlyUnverified { get; set; }
    }
}
