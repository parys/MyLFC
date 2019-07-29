using Microsoft.Extensions.DependencyInjection;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Business.Services.Helpers
{
    public static class ServiceInjectionsHelper
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<IForumMessageService, ForumMessageService>();
            services.AddTransient<IForumSectionService, ForumSectionService>();
            services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
            services.AddTransient<IForumThemeService, ForumThemeService>();
            services.AddTransient<IUploadService, UploadService>();
        }
    }
}
