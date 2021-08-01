using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using MyLfc.Domain;
using MyLfc.Domain.Polls;

namespace MyLfc.Application
{
    public interface ILiverpoolContext
    {
        public DatabaseFacade Database { get; }


        #region DbSets
        public DbSet<Wish> Wishes { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<MaterialCategory> MaterialCategories { get; set; }
        public DbSet<MaterialComment> MaterialComments { get; set; }
        public DbSet<ForumSection> ForumSections { get; set; }
        public DbSet<ForumSubsection> ForumSubsections { get; set; }
        public DbSet<ForumTheme> ForumThemes { get; set; }
        public DbSet<ForumMessage> ForumMessages { get; set; }
        public DbSet<RoleGroup> RoleGroups { get; set; }
        public DbSet<RoleRoleGroup> RoleRoleGroups { get; set; }
        public DbSet<PrivateMessage> PrivateMessages { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<ChatMessage> ChatMessages { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<HelpEntity> HelpEntities { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Season> Seasons { get; set; }
        public DbSet<Stadium> Stadiums { get; set; }
        public DbSet<UserConfig> UserConfigs { get; set; }
        public DbSet<Transfer> Transfers { get; set; }
        public DbSet<CommentVote> CommentVotes { get; set; }
        public DbSet<Injury> Injuries { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<MatchEvent> MatchEvents { get; set; }
        public DbSet<MatchPerson> MatchPersons { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Poll> Polls { get; set; }
        public DbSet<PollAnswer> PollAnswers { get; set; }
        public DbSet<PollAnswerUser> PollAnswerUsers { get; set; }
        public DbSet<FaqItem> FaqItems { get; set; }
        public DbSet<FaqCategory> FaqCategories { get; set; }

        public DbSet<Contract> Contracts { get; set; }


        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }

        #endregion

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);

        public int SaveChanges();

        public void Dispose();
    }
}
