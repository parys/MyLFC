using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.DTO
{
    public class ResetPasswordDto : IDto
    {
        [Required(AllowEmptyStrings = false)]
        public string Code { get; set; }

        [Required(AllowEmptyStrings = false)]
        [EmailAddress]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string ConfirmPassword { get; set; }
    }
}
