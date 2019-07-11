using Microsoft.Extensions.DependencyInjection;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Business.Services.Helpers
{
    public static class ServiceInjectionsHelper
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IChatMessageService, ChatMessageService>();
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<IForumMessageService, ForumMessageService>();
            services.AddTransient<IForumSectionService, ForumSectionService>();
            services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
            services.AddTransient<IForumThemeService, ForumThemeService>();
            services.AddTransient<IMatchService, MatchService>();
            services.AddTransient<IMatchEventService, MatchEventService>();
            services.AddTransient<IMatchPersonService, MatchPersonService>();
            services.AddTransient<IMaterialCategoryService, MaterialCategoryService>();
            services.AddTransient<ICommentService, CommentService>();
            services.AddTransient<IPersonService, PersonService>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            services.AddTransient<IUploadService, UploadService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IWishService, WishService>();
        //    services.AddSingleton<IMapper>(MapperConfig.GetConfiration.CreateMapper());
        }
    }
}
