using System.Collections.Generic;

namespace MyLiverpool.Business.Dto
{
    public class SquadListDto
    {
        public IEnumerable<PersonDto> Goalkeepers;
        public IEnumerable<PersonDto> Defenders;
        public IEnumerable<PersonDto> Midfielders;
        public IEnumerable<PersonDto> Strikers;
    }
}
