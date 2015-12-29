using System.ComponentModel.DataAnnotations;
using MyLiverpool.Business.Resources;

namespace MyLiverpoolSite.Business.ViewModels.Account
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        [Display(ResourceType = typeof (UsersMessages), Name = "Email")]
        public string Email { get; set; }
    }
}
