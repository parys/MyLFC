using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Common
{
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
        [Display(Name = "Помощник судьи")]
        SubReferee = 8,
        [Display(Name = "Резервный судья")]
        ReservReferee = 9,

    }
}
