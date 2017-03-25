using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.DtoNext
{
    public class SeasonDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public int StartSeasonYear { get; set; }

        public int EndSeasonYear => StartSeasonYear + 1;
    }
}
