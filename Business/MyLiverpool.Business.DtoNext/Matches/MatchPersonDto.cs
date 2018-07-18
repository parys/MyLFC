using System.ComponentModel.DataAnnotations;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto
{
    public class MatchPersonDto : IDto
    {
        [Required]
        public int MatchId { get; set; }

        [Required]
        public int PersonId { get; set; }

        public string PersonName { get; set; }

        [Required]
        public MatchPersonType PersonType { get; set; }

        public string PersonTypeName { get; set; }

        public int Number { get; set; }
    }
}
