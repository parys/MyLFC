using System;
using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application;
using MyLfc.Domain;
using MyLfc.Domain.Polls;

namespace MyLfc.Persistence
{
    public sealed class LiverpoolContext : IdentityDbContext<User, Role, int>, ILiverpoolContext
    {
        private static bool _created;
        public LiverpoolContext(DbContextOptions<LiverpoolContext> options) : base(options)
        {
            if (!_created)
            {
                if (Database.ProviderName != "Microsoft.EntityFrameworkCore.InMemory")
                {
                    Database.Migrate();
                }
                _created = true;
            }
        }

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

        #endregion

        // for debug purposes
        //public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        //{
        //    var en = ChangeTracker.Entries();
        //    var entities = (from entry in ChangeTracker.Entries()
        //                    where entry.State == EntityState.Modified || entry.State == EntityState.Added
        //                    select entry.Entity);

        //    var validationResults = new List<ValidationResult>();
        //    foreach (var entity in entities)
        //    {
        //        if (!Validator.TryValidateObject(entity, new ValidationContext(entity), validationResults))
        //        {
        //            // throw new ValidationException() or do whatever you want
        //        }
        //    }
        //    return base.SaveChangesAsync(cancellationToken);
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(LiverpoolContext).Assembly);

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

        }
    }
}
