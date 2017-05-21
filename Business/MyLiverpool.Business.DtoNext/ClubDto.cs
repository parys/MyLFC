using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto
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
        
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string StadiumName { get; set; }
        
        [Required]
        public int StadiumId { get; set; }

        public string Logo { get; set; }
    }
}
