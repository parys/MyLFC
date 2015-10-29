using System.ComponentModel.DataAnnotations;

namespace MyLiverpoolSite.Business.ViewModels.Account
{
    public class SignInViewModel
    {
        [Required]
      //  [Display(ResourceType = typeof(SignUpStrings), Name = "Login")]
        [RegularExpression("^[a-zA-Z0-9-_ ]+$")]
        public string Login { get; set; }

        [Required]
        [DataType(DataType.Password)]
      //  [Display(ResourceType = typeof(SignUpStrings), Name = "Password")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
      //  [Display(ResourceType = typeof(SignUpStrings), Name = "ConfirmPassword")]
        public string ConfirmPassword { get; set; }

        public bool RememberMe { get; set; }
    }
}
