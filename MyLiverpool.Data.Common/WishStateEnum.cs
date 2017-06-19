using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Data.Common
{
    public enum WishStateEnum
    {
        [Display(Name = "По умолчанию")]
        Default = 0,
        [Display(Name = "Открыто")]
        Open = 1,
        [Display(Name = "Сделано")]
        Closed = 2,
        [Display(Name = "В процессе реализации")]
        InProgress = 3,
        [Display(Name = "Отложено")]
        Postponed = 4,
        [Display(Name = "Благодарность")]
        Thanks = 5,
    }
}
