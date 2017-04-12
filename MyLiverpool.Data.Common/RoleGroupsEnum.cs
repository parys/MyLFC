using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Common
{
    public enum RoleGroupsEnum
    {
        [Display(Name = "Админ")]
        Admin = 1,
        AdminAssistance = 2,
        MainNewsmaker = 3,
        Newsmaker = 4,
        [Display(Name = "Редактор")]
        Editor = 5,
        MainEditor = 6,
        Intern = 7,
        Moderator = 8,
        MainModerator = 9,
        Author = 10,
        [Display(Name = "Пользователь")]
        Simple = 11,
        ForumModerator = 12,
        ForumMainModerator = 13
    }
}