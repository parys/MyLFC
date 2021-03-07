using FluentValidation;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.MatchEvents
{
    public class UpsertMatchEventCommand
    {
        public class Request
        {
            public int PersonId { get; set; }

            public MatchEventType Type { get; set; }

            public int SeasonId { get; set; }

            public int MatchId { get; set; }

            public byte? Minute { get; set; }

            public bool IsOur { get; set; }
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
     
            }
        }

        public class Response
        {
            public int Id { get; set; }

            public int PersonId { get; set; }

            public string PersonName { get; set; }

            public MatchEventType Type { get; set; }

            public string TypeName { get; set; }

            public int MatchId { get; set; }

            public bool IsOur { get; set; }

            public byte? Minute { get; set; }

            public bool Home { get; set; }
        }
    }
}
