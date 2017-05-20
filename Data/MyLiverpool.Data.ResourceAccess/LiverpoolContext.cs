using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.DependencyInjection;

namespace MyLiverpool.Data.ResourceAccess
{
    public class LiverpoolContext : IdentityDbContext<User, Role, int>
    {
        private static bool _created;
        private static bool _isMigrator;
        public LiverpoolContext(DbContextOptions<LiverpoolContext> options, bool isIsMigrator = false) : base(options)
        {
            _isMigrator = isIsMigrator;
            if (!_created)
            {
                _created = true;
            }
        }

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
            modelBuilder.Entity<MaterialComment>().HasOne(x => x.Author).WithMany(x => x.Comments).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<ForumMessage>().HasOne(x => x.Author).WithMany(u => u.ForumMessages).HasForeignKey(x => x.AuthorId);
           
            modelBuilder.Entity<Material>().HasOne(x => x.Author).WithMany(x => x.Materials).HasForeignKey(x => x.AuthorId);
            
            modelBuilder.Entity<Material>().HasOne(x => x.Category).WithMany(x => x.Materials).HasForeignKey(x => x.CategoryId);
            modelBuilder.Entity<MaterialComment>().HasOne(u => u.Material).WithMany(x => x.Comments).HasForeignKey(x => x.MaterialId);

            //modelBuilder.Entity<MaterialComment>().HasOptional(x => x.Parent).WithMany(x => x.Children).HasForeignKey(x => x.ParentId);

            modelBuilder.Entity<ForumSubsection>().HasOne(x => x.Section).WithMany(x => x.Subsections).HasForeignKey(x => x.SectionId);
            modelBuilder.Entity<ForumTheme>().HasOne(x => x.Subsection).WithMany(x => x.Themes).HasForeignKey(x => x.SubsectionId);
            modelBuilder.Entity<ForumMessage>().HasOne(x => x.Theme).WithMany(x => x.Messages).HasForeignKey(x => x.ThemeId);

            modelBuilder.Entity<User>().HasOne(x => x.RoleGroup).WithMany(x => x.Users).HasForeignKey(x => x.RoleGroupId);
          //  modelBuilder.Entity<Role>().HasMany(x => x.RoleRoleGroups);
         //   modelBuilder.Entity<RoleGroup>().HasMany(x => x.RoleGroups);
            modelBuilder.Entity<RoleRoleGroup>().HasKey(t => new { t.RoleId, t.RoleGroupId });
            modelBuilder.Entity<RoleRoleGroup>()
               .HasOne(pt => pt.Role)
               .WithMany(p => p.RoleRoleGroups)
               .HasForeignKey(pt => pt.RoleId);

            modelBuilder.Entity<RoleRoleGroup>()
                .HasOne(pt => pt.RoleGroup)
                .WithMany(t => t.RoleGroups)
                .HasForeignKey(pt => pt.RoleGroupId);

            modelBuilder.Entity<PrivateMessage>().HasOne(x => x.Sender).WithMany(x => x.SentPrivateMessages).HasForeignKey(x => x.SenderId);
            modelBuilder.Entity<PrivateMessage>().HasOne(x => x.Receiver).WithMany(x => x.ReceivedPrivateMessages).HasForeignKey(x => x.ReceiverId);

            modelBuilder.Entity<Match>().HasOne(x => x.Club).WithMany(x => x.Matches).HasForeignKey(x => x.ClubId);
            modelBuilder.Entity<Club>().HasOne(x => x.Stadium).WithMany(x => x.Clubs).HasForeignKey(x => x.StadiumId);
            modelBuilder.Entity<Match>().HasOne(x => x.Stadium).WithMany(x => x.Matches).HasForeignKey(x => x.StadiumId);

            modelBuilder.Entity<ChatMessage>()
                .HasOne(x => x.Author)
                .WithMany(x => x.ChatMessages)
                .HasForeignKey(x => x.AuthorId);

            modelBuilder.Entity<Match>().HasOne(m => m.Season).WithMany(s => s.Matches).HasForeignKey(m => m.SeasonId);

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }
            base.OnModelCreating(modelBuilder);
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder modelBuilder)
        {
            modelBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            if (_isMigrator)
            {
                modelBuilder.UseOpenIddict<int>();
                modelBuilder.UseSqlServer(
                    "Server=User-pc;Database=MyLiverpool1123Migrator;Trusted_Connection=True;MultipleActiveResultSets=true");
            }
            base.OnConfiguring(modelBuilder);
        }
    }
}
