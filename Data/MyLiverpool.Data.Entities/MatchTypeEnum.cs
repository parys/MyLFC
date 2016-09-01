using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Entities
{
    public enum MatchTypeEnum
    {
        // Error = 0,
        [Display(Name = "Английская Премьер-Лига")]
        Apl = 1,
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
        EuropeSuperCup = 8
    }
}
