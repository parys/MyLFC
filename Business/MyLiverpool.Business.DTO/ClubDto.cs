using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.DTO
{
    public class ClubDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string EnglishName { get; set; }

        [Required]
        public string Stadium { get; set; }

        public string Logo { get; set; }
    }
}
