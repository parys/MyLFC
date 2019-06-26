using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Web.Mvc.Models.AccountViewModels
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
        [Display(Name = "Имя пользователя")]
        public string UserName { get; set; }

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
