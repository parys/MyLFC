using System.ComponentModel.DataAnnotations;

namespace MyLfc.Data.Common;

public enum WishType
{
   // Default = 0,
   [Display(Name = "Баг")]
    Bug = 1,
    [Display(Name = "Баг оформления")]
    BugUi = 2,
    [Display(Name = "Пожелание")]
    Feature = 3,
    [Display(Name = "Пожелание оформления")]
    FeatureUi = 4,
}
