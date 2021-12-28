﻿using System.ComponentModel.DataAnnotations;

namespace MyLfc.Data.Common
{
    public enum PersonType
    {
        [Display(Name = "Первая команда")]
        First = 1,
        [Display(Name = "Академия")]//todo official site doesn't split them
        Academy = 2,
        [Display(Name = "В аренде")]
        Loan = 3,
        [Display(Name = "Соперник")]
        Rival = 4,
        [Display(Name = "Женская команда")]
        Ladies = 5,
        [Display(Name = "Тренерский штаб")]
        Stuff = 6,
        [Display(Name = "Бывший игрок")]
        OldPlayer = 7,
        [Display(Name = "Бывший сотрудник штаба")]
        OldStuff = 8,
        [Display(Name = "Бывший игрок и бывший тренер")]
        OldPlayerAndOldStuff = 9,
        [Display(Name = "Тренерский штаб академии")]
        StuffAcademy = 10,
        [Display(Name = "Судья")]
        Referee = 11,
        [Display(Name = "Бывший игрок и текущий тренер")]
        OldPlayerAndStuff = 12,
        [Display(Name = "Бывший игрок и текущий тренер академии")]
        OldPlayerAndStuffAcademy = 13,
        [Display(Name = "Тренер соперника")]
        CompetitorCoach = 14,
    }
}
