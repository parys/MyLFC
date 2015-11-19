using System.ComponentModel.DataAnnotations;
using MyLiverpoolSite.Business.ViewModels.Resources;

namespace MyLiverpoolSite.Business.ViewModels.Account
{
    public class LoginViewModel
    {
        [Required]
        [Display(ResourceType = typeof (UsersMessages), Name = "Login")]
        public string Login { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(ResourceType = typeof (UsersMessages), Name = "Password")]
        public string Password { get; set; }

        [Display(ResourceType = typeof (UsersMessages), Name = "RememberMe")]
        public bool RememberMe { get; set; }
    }
}
