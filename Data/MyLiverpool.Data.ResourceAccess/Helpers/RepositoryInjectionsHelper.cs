using Microsoft.Extensions.DependencyInjection;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using MyLiverpool.Data.ResourceAccess.Repositories;

namespace MyLiverpool.Data.ResourceAccess.Helpers
{
    public static class RepositoryInjectionsHelper
    {
        public static void RegisterRepositories(this IServiceCollection services)
        {
            services.AddTransient(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IChatMessageRepository, ChatMessageRepository>();
            services.AddScoped<IClubRepository, ClubRepository>();
            services.AddScoped<IForumMessageRepository, ForumMessageRepository>();
            services.AddScoped<IForumSectionRepository, ForumSectionRepository>();
            services.AddScoped<IForumSubsectionRepository, ForumSubsectionRepository>();
            services.AddScoped<IForumThemeRepository, ForumThemeRepository>();
            services.AddScoped<IHelperEntityRepository, HelperEntityRepository>();
            services.AddScoped<IInjuryRepository, InjuryRepository>();
            services.AddScoped<ILoanRepository, LoanRepository>();
            services.AddScoped<IMatchRepository, MatchRepository>();
            services.AddScoped<IMatchPersonRepository, MatchPersonRepository>();
            services.AddScoped<IMatchEventRepository, MatchEventRepository>();
            services.AddScoped<IMaterialCategoryRepository, MaterialCategoryRepository>();
            services.AddScoped<IMaterialCommentRepository, MaterialCommentRepository>();
            services.AddScoped<IMaterialRepository, MaterialRepository>();
            services.AddScoped<IPersonRepository, PersonRepository>();
            services.AddScoped<IPmRepository, PmRepository>();
            services.AddScoped<IRoleGroupRepository, RoleGroupRepository>();
            services.AddScoped<ISeasonRepository, SeasonRepository>();
            services.AddScoped<IStadiumRepository, StadiumRepository>();
            services.AddScoped<ITransferRepository, TransferRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
        }
    }
}
