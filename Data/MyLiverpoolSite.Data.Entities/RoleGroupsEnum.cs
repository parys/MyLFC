using System.ComponentModel.DataAnnotations;

namespace MyLiverpoolSite.Data.Entities
{
    public enum RoleGroupsEnum
    {
        [Display(Name = "Администратор")]
        Admin = 1,
        [Display(Name = "Пользователь")]
        User = 2,
        [Display(Name = "Помощник Администатора")]
        AdminAssistance = 3,
        [Display(Name = "Главный ньюсмейкер")]
        MainNewsmaker = 4,
        [Display(Name = "Ньюсмейкер")]
        Newsmaker = 5,
    }
}