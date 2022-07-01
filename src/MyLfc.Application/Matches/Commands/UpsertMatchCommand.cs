using System;
using FluentValidation;

namespace MyLfc.Application.Matches.Commands
{
    public class UpsertMatchCommand
    {
        public abstract class Request
        {
            public bool IsHome { get; set; }

            public int ClubId { get; set; }

            public DateTimeOffset DateTime { get; set; }

            public int TypeId { get; set; }

            public int? StadiumId { get; set; }

            public string ScoreHome { get; set; }

            public int? ScorePenaltyHome { get; set; }

            public string ScoreAway { get; set; }

            public int? ScorePenaltyAway { get; set; }

            public int? SeasonId { get; set; }

            public string ReportUrl { get; set; }

            public string PhotoUrl { get; set; }

            public string VideoUrl { get; set; }

            public string PreviewId { get; set; }

            public string ReportId { get; set; }
        }


        public abstract class Validator<T> : AbstractValidator<T> where T : Request
        {
            protected Validator()
            {
                RuleFor(x => x.ClubId).NotEmpty();

                RuleFor(x => x.TypeId).NotEmpty();
            }
        }
    }
}
