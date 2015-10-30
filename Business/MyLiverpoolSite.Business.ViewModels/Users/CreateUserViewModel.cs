namespace MyLiverpoolSite.Business.ViewModels.Users
{
    public class CreateUserViewModel
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public string Email { get; set; }
    }
}
