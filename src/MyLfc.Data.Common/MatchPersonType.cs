using System.ComponentModel.DataAnnotations;

namespace MyLfc.Data.Common;

public enum MatchPersonType
{
    [Display(Name = "Наша команда")]
    Team = 1,
    [Display(Name = "Наша замена")]
    TeamBench = 2,
    [Display(Name = "Соперник")]
    Competitor = 3,
    [Display(Name = "Соперник замена")]
    CompetitorBench = 4,
    [Display(Name = "Наш тренер")]
    Coach = 5,
    [Display(Name = "Тренер соперника")]
    CompetitorCoach = 6,
    [Display(Name = "Главный судья")]
    MainReferee = 7,
    [Display(Name = "Боковой судья")]
    SubReferee = 8,
    [Display(Name = "Резервный судья")]
    FourthReferee = 9,
    [Display(Name = "Судья ВАР")]
    AdditionalReferee = 10,
    [Display(Name = "Травма наша(до матча)")]
    Injury = 11,
    [Display(Name = "Дисква наша(до матча)")]
    Ban = 12,
    [Display(Name = "Травма соперника (до матча)")]
    InjuryCompetitor = 13,
    [Display(Name = "Дисква соперника (до матча)")]
    BanCompetitor = 14,


}
