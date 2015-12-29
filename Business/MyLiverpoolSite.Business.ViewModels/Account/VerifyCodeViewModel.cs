using System.ComponentModel.DataAnnotations;
using MyLiverpool.Business.Resources;

namespace MyLiverpoolSite.Business.ViewModels.Account
{
    public class VerifyCodeViewModel
    {
        [Required]
        public string Provider { get; set; }

        [Required]
        [Display(ResourceType = typeof (UsersMessages), Name = "Code")]
        public string Code { get; set; }
        public string ReturnUrl { get; set; }

        [Display(ResourceType = typeof (UsersMessages), Name = "RememberBrowser")]
        public bool RememberBrowser { get; set; }

        public bool RememberMe { get; set; }
    }
}
