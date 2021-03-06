using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Common
{
    public enum MatchEventType
    {
        [Display(Name = "Гол")]
        Goal = 1,
        [Display(Name = "Гол с пенальти")]
        GoalPenalty = 2,
        [Display(Name = "Гол в серии пенальти")]
        GoalPenaltySeries = 3,
        [Display(Name = "Гол в собственные ворота")]
        GoalOwn = 4,
        [Display(Name = "Голевая передача")]
        Assist = 5,
        [Display(Name = "Желтая карточка")]
        Yellow = 6,
        [Display(Name = "Красная карточка")]
        Red = 7,
        [Display(Name = "Выход на замену")]
        SubstitudeIn = 8,
        [Display(Name = "Уход на замену")]
        SubstitudeOut = 9,
        [Display(Name = "Незабитый пенальти")]
        NotGoalPenalty = 10,
        [Display(Name = "Незабитый пенальти в серии")]
        NotGoalPenaltySeries = 11,
        [Display(Name = "Травма")]
        Injury = 12,
        [Display(Name = "Гол отменён")]
        DisallowedGoal = 13
    }
}
