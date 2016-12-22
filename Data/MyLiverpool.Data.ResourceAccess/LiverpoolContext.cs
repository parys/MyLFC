using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.DependencyInjection;

namespace MyLiverpool.Data.ResourceAccess
{
    //private readonly IHostingEnvironment _hostingEnvironment;
    public class LiverpoolContext : IdentityDbContext<User, Role, int>//, UserLogin, UserRole, UserClaim>
    {
        private static bool _created;

        public LiverpoolContext(DbContextOptions<LiverpoolContext> options) : base(options)
        {
            if (!_created)
            {
                _created = true;
            }
        }

        //   public DbSet<UserClaim> UserClaims { get; set; }
        //    public DbSet<UserLogin> UserLogins { get; set; }
        //     public DbSet<UserRole> UserRoles { get; set; }

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

        //public DbSet<OpenIddictApplication> Applications { get; set; }
        //public DbSet<OpenIddictAuthorization> Authorizations { get; set; }
        //public DbSet<OpenIddictScope> Scopes { get; set; }
        //public DbSet<OpenIddictToken> Tokens { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          //  modelBuilder.Entity<User>().ToTable("Users");
          //  modelBuilder.Entity<Role>().ToTable("RoleGroups");
         //   modelBuilder.Entity<UserClaim>().ToTable("UserClaims");
         //   modelBuilder.Entity<UserLogin>().ToTable("UserLogins");
        //    modelBuilder.Entity<UserRole>().ToTable("UserRoles");

        //    modelBuilder.Entity<OpenIddictApplication>().ToTable("Applications");
       //     modelBuilder.Entity<OpenIddictAuthorization>().ToTable("Authorizations");
        //    modelBuilder.Entity<OpenIddictScope>().ToTable("Scopes");
          //  modelBuilder.Entity<OpenIddictToken>().ToTable("Tokens");
            
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

            modelBuilder.Entity<ChatMessage>()
                .HasOne(x => x.Author)
                .WithMany(x => x.ChatMessages)
                .HasForeignKey(x => x.AuthorId);

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }
            base.OnModelCreating(modelBuilder);
        }

        //    public DbSet<RoleClaim> RoleClaims { get; set; }

        // protected override void On(ModelBuilder modelBuilder)
        // {
        //    base.OnModelCreating(modelBuilder);
        //   // modelBuilder.Entity<User>().ForRelational().Table(tableName: "Users");//, schemaName: "Map");
        //   // modelBuilder.Entity<IdentityUser>().ForRelational().Table(tableName: "Users");//, schemaName: "Map");
        //   // modelBuilder.Entity<User>().Key(u => u.Id);
        //    //  modelBuilder.Entity<User>().ToTable("MyUsers").Property(p => p.Id).HasColumnName("UserId");
        //    //  modelBuilder.Entity<ApplicationUser>().ToTable("MyUsers").Property(p => p.Id).HasColumnName("UserId");
        //    //  modelBuilder.Entity<IdentityUserRole>().ToTable("MyUserRoles");
        //    //  modelBuilder.Entity<IdentityUserLogin>().ToTable("MyUserLogins");
        //    //  modelBuilder.Entity<IdentityUserClaim>().ToTable("MyUserClaims");
        //    //  modelBuilder.Entity<IdentityRole>().ToTable("MyRoles");
        // }

        protected override void OnConfiguring(DbContextOptionsBuilder modelBuilder)
        {
            modelBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking); //todo ??
            base.OnConfiguring(modelBuilder);
        }
    }
}
