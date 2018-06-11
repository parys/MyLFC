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
            services.AddScoped<IForumMessageRepository, ForumMessageRepository>();
            services.AddScoped<IForumSectionRepository, ForumSectionRepository>();
            services.AddScoped<IForumSubsectionRepository, ForumSubsectionRepository>();
            services.AddScoped<IForumThemeRepository, ForumThemeRepository>();
            services.AddScoped<IHelperEntityRepository, HelperEntityRepository>();
            services.AddScoped<IMatchRepository, MatchRepository>();
            services.AddScoped<IMatchPersonRepository, MatchPersonRepository>();
            services.AddScoped<IMaterialCategoryRepository, MaterialCategoryRepository>();
            services.AddScoped<IMaterialCommentRepository, MaterialCommentRepository>();
            services.AddScoped<IMaterialRepository, MaterialRepository>();
            services.AddScoped<IRoleGroupRepository, RoleGroupRepository>();
            services.AddScoped<ITransferRepository, TransferRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
        }
    }
}
