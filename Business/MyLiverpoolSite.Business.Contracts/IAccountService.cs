namespace MyLiverpoolSite.Business.Contracts
{
    public interface IAccountService
    {
        int GetUserIdByLoginAndPassword(string login, string password);

      //  HttpCookie GetCookie(int userId, bool rememberMe);
    }
}
