using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.DTO
{
    public class ClubDto : IDto
    {
        public int Id { get; set; }

        [Required(AllowEmptyStrings = false)]
        [DisplayFormat(ConvertEmptyStringToNull = false)]

        public string Name { get; set; }

        [Required(AllowEmptyStrings = false)]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string EnglishName { get; set; }

        [Required(AllowEmptyStrings = false)]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string Stadium { get; set; }

        public string Logo { get; set; }
    }
}
