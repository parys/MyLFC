using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Mappings;

namespace MyLiverpool.Business.Services.Helpers
{
    public static class ServiceInjectionsHelper
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IAdminService, AdminService>();
            services.AddTransient<IChatMessageService, ChatMessageService>();
            services.AddTransient<IClubService, ClubService>();
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<IForumMessageService, ForumMessageService>();
            services.AddTransient<IForumSectionService, ForumSectionService>();
            services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
            services.AddTransient<IForumThemeService, ForumThemeService>();
            services.AddTransient<IHelperService, HelperService>();
            services.AddTransient<IInjuryService, InjuryService>();
            services.AddTransient<IMatchService, MatchService>();
            services.AddTransient<IMatchEventService, MatchEventService>();
            services.AddTransient<IMatchPersonService, MatchPersonService>();
            services.AddTransient<IMaterialCategoryService, MaterialCategoryService>();
            services.AddTransient<ICommentService, CommentService>();
            services.AddTransient<IMaterialService, MaterialService>();
            services.AddTransient<INotificationService, NotificationService>();
            services.AddTransient<IPersonService, PersonService>();
            services.AddTransient<IPmService, PmService>();
            services.AddTransient<IPollService, PollService>();
            services.AddTransient<IRoleService, RoleService>();
            services.AddTransient<ISeasonService, SeasonService>();
            services.AddTransient<IStadiumService, StadiumService>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            services.AddTransient<ITransferService, TransferService>();
            services.AddTransient<IUploadService, UploadService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IWishService, WishService>();
        //    services.AddSingleton<IMapper>(MapperConfig.GetConfiration.CreateMapper());
        }
    }
}
