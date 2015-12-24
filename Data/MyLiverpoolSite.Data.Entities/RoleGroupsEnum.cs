using System.ComponentModel.DataAnnotations;

namespace MyLiverpoolSite.Data.Entities
{
    public enum RoleGroupsEnum
    {
        [Display(Name = "Администратор")]
        Admin = 1,
        [Display(Name = "Пользователь")]
        Simple = 2,
        [Display(Name = "Помощник Администатора")]
        AdminAssistance = 3,
        [Display(Name = "Главный ньюсмейкер")]
        MainNewsmaker = 4,
        [Display(Name = "Ньюсмейкер")]
        Newsmaker = 5,
        Editor = 6,
        MainEditor = 7,
        Intern = 8,
        Moderator = 9,
        MainModerator = 10,
        Author = 11,
    }
}