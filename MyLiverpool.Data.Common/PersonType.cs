using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Common
{
    public enum PersonType
    {
        [Display(Name = "Первая команда")]
        First = 1,
        [Display(Name = "Академия")]//todo official site doesn't split them
        Academy = 2,
        [Display(Name = "В аренде")]
        Loan = 3,
        [Display(Name = "До 19")]
        U19 = 4,
        [Display(Name = "Женская команда")]
        Ladies = 5,
        [Display(Name = "Тренерский штаб")]
        Stuff = 6,
        [Display(Name = "Бывший игрок")]
        OldPlayer = 7,
        [Display(Name = "Бывший сотрудник штаба")]
        OldStuff = 8,
        [Display(Name = "Бывший игрок и тренер")]
        OldPlayerAndStuff = 9,
        [Display(Name = "Тренерский штаб академии")]
        StuffAcademy = 10
    }
}
