using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Models.AccountViewModels
{
    /// <summary>
    /// Login model for lite version.
    /// </summary>
    public class LoginViewModel
    {
        /// <summary>
        /// Email address.
        /// </summary>
        [Required]
        [EmailAddress]
        [Display(Name = "Почта")]
        public string Email { get; set; }

        /// <summary>
        /// Password.
        /// </summary>
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }

        /// <summary>
        /// Remember me field.
        /// </summary>
        [Display(Name = "Запомнить?")]
        public bool RememberMe { get; set; }
    }
}
