using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Common
{
    public enum RoleGroupsEnum
    {
        [Display(Name = "Админ")]
        Admin = 1,
        [Display(Name = "Ассистент админа")]
        AdminAssistance = 2,
        [Display(Name = "Главный ньюсмейкер")]
        MainNewsmaker = 3,
        [Display(Name = "Ньюсмейкер")]
        Newsmaker = 4,
        [Display(Name = "Редактор")]
        Editor = 5,
        [Display(Name = "Главный редактор")]
        MainEditor = 6,
        [Display(Name = "Стажер")]
        Intern = 7,
        [Display(Name = "Модератор")]
        Moderator = 8,
        [Display(Name = "Главный модаратор")]
        MainModerator = 9,
        [Display(Name = "Автор")]
        Author = 10,
        [Display(Name = "Пользователь")]
        Simple = 11,
        [Display(Name = "Модератор форума")]
        ForumModerator = 12,
        [Display(Name = "Главный модератор форума")]
        ForumMainModerator = 13,
        [Display(Name = "Ветеран")]
        Veteran = 14,
        [Display(Name = "Проверенный")]
        Proven = 15,
        [Display(Name = "Ведущий конкурса прогнозов")]
        ForecastLeader = 16,
        [Display(Name = "Знаток")]
        HistoricExpert = 17
    }
}