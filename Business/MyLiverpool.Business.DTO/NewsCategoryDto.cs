namespace MyLiverpool.Business.DTO
{
    public class NewsCategoryDto : IDto
    {
        public int Id { get; set; }

        public int ItemsCount { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
