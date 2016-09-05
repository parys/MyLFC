using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.DtoNext
{
    public class MaterialCategoryDto : IDto
    {
        public int Id { get; set; }

        public int ItemsCount { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public MaterialType MaterialType { get; set; }
    }
}
