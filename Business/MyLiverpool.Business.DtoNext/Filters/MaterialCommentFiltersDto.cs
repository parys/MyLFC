namespace MyLiverpool.Business.Dto.Filters
{
    public class MaterialCommentFiltersDto : BaseFiltersDto
    {

       // public int? CategoryId { get; set; }

        public int? UserId { get; set; }

        public bool OnlyUnverified { get; set; }
    }
}
