using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
