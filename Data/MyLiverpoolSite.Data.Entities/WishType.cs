using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyLiverpoolSite.Data.Entities
{
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
}
