using System.ComponentModel.DataAnnotations;

namespace MyLfc.Data.Common;

public enum MatchTypeEnum
{
    // Error = 0,
    [Display(Name = "Английская Премьер-Лига")]
    Epl = 1,
    [Display(Name = "Кубок Лиги")]
    CurlingCup = 2,
    [Display(Name = "Кубок Англии")]
    EnglandCup = 3,
    [Display(Name = "Предсезонная подготовка")]
    PreSeason = 4,
    [Display(Name = "Лига Европы")]
    EuropeLeague = 5,
    [Display(Name = "Лига Чемпионов")]
    ChampionsLeague = 6,
    [Display(Name = "Суперкубок Англии")]
    CommunityShield = 7,
    [Display(Name = "Суперкубок Европы")]
    EuropeSuperCup = 8,
    [Display(Name = "Клубный Чемпионат Мира")]
    WorldClubCup = 9
}
