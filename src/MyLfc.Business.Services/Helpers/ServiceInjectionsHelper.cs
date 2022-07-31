using Microsoft.Extensions.DependencyInjection;
using MyLfc.Business.Contracts;

namespace MyLfc.Business.Services.Helpers;

public static class ServiceInjectionsHelper
{
    public static void RegisterServices(this IServiceCollection services)
    {
        services.AddTransient<IEmailSender, AuthMessageSender>();
        services.AddTransient<IForumMessageService, ForumMessageService>();
        services.AddTransient<IForumSectionService, ForumSectionService>();
        services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
        services.AddTransient<IForumThemeService, ForumThemeService>();
        services.AddTransient<IUploadService, UploadService>();
    }
}
