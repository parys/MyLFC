using System.ComponentModel.DataAnnotations;
using MyLiverpoolSite.Business.ViewModels.Resources;

namespace MyLiverpoolSite.Business.ViewModels.Account
{
    public class ExternalLoginConfirmationViewModel
    {
        [Required]
        [Display(ResourceType = typeof (UsersMessages), Name = "Email")]
        public string Email { get; set; }
    }
}
