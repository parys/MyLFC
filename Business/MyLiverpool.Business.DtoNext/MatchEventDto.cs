using System.ComponentModel.DataAnnotations;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto
{
    public class MatchEventDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public int PersonId { get; set; }
        
        public string PersonName { get; set; }

        [Required]
        public MatchEventType Type { get; set; }

        public string TypeName { get; set; }

        [Required]
        public int SeasonId { get; set; }

        public string SeasonName { get; set; }

        [Required]
        public int MatchId { get; set; }

        public bool IsOur { get; set; }

        [Required]
        public string Minute { get; set; }

        [Required]
        public bool Home { get; set; }
    }
}
