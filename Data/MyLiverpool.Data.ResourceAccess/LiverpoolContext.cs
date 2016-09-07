using System.Linq;
using MyLiverpool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using OpenIddict;

//using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess
{

    public class LiverpoolContext : OpenIddictDbContext<User, Role, int>//, UserLogin, UserRole, UserClaim>
    //<User, Role, int>
    {
        private static bool _created;

        public LiverpoolContext(DbContextOptions<LiverpoolContext> options) : base(options)
//"Server=.;Initial Catalog=MyLiverpool1;Trusted_Connection=True;MultipleActiveResultSets=true")//, throwIfV1Schema: false)//@"Data Source=Andrew-PC;Initial Catalog=MyLiverpoolDB;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False") 
                                                               //Data Source=ANDREW-PC;Initial Catalog=NewDbTest;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False")
        {
           
            // Create the database and schema if it doesn't exist
               if (!_created)
              {
              _created = true;


                //     Database.Create();
                //   Database.AsRelational().ApplyMigrations();
            }
        }

        //public LiverpoolContext(): base() //todo call with params
        //{
            
        //}

        public static LiverpoolContext Create()
        {
            var builder = new DbContextOptionsBuilder<LiverpoolContext>();
            builder.UseSqlServer("Server=.;Initial Catalog=MyLiverpool1123;Trusted_Connection=True;MultipleActiveResultSets=true");
            return new LiverpoolContext(builder.Options);
        }
        //   public DbSet<UserClaim> UserClaims { get; set; }
        //    public DbSet<UserLogin> UserLogins { get; set; }
        //     public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<Wish> Wishs { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<MaterialCategory> MaterialCategories { get; set; }
        public DbSet<MaterialComment> MaterialComments { get; set; }
        public DbSet<ForumSection> ForumSections { get; set; }
        public DbSet<ForumSubsection> ForumSubsections { get; set; }
        public DbSet<ForumTheme> ForumThemes { get; set; }
        public DbSet<ForumMessage> ForumMessages { get; set; }

        public DbSet<RoleGroup> RoleGroups { get; set; }
        public DbSet<PrivateMessage> PrivateMessages { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<Match> Matches { get; set; }

        //public DbSet<OpenIddictApplication> Applications { get; set; }
        //public DbSet<OpenIddictAuthorization> Authorizations { get; set; }
        //public DbSet<OpenIddictScope> Scopes { get; set; }
        //public DbSet<OpenIddictToken> Tokens { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          //  modelBuilder.Entity<User>().ToTable("Users");
          //  modelBuilder.Entity<Role>().ToTable("Roles");
         //   modelBuilder.Entity<UserClaim>().ToTable("UserClaims");
         //   modelBuilder.Entity<UserLogin>().ToTable("UserLogins");
        //    modelBuilder.Entity<UserRole>().ToTable("UserRoles");

        //    modelBuilder.Entity<OpenIddictApplication>().ToTable("Applications");
       //     modelBuilder.Entity<OpenIddictAuthorization>().ToTable("Authorizations");
        //    modelBuilder.Entity<OpenIddictScope>().ToTable("Scopes");
          //  modelBuilder.Entity<OpenIddictToken>().ToTable("Tokens");

            modelBuilder.Entity<Wish>().ToTable("Wishes");
            
            modelBuilder.Entity<MaterialComment>().HasOne(x => x.Author).WithMany(x => x.Comments).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<ForumMessage>().HasOne(x => x.Author).WithMany(u => u.ForumMessages);
           
            modelBuilder.Entity<Material>().HasOne(x => x.Author).WithMany(x => x.Materials).HasForeignKey(x => x.AuthorId);
            
            modelBuilder.Entity<Material>().HasOne(x => x.Category).WithMany(x => x.Materials).HasForeignKey(x => x.CategoryId);
            modelBuilder.Entity<MaterialComment>().HasOne(u => u.Material).WithMany(x => x.Comments).HasForeignKey(x => x.MaterialId);

            //modelBuilder.Entity<MaterialComment>().HasOptional(x => x.Parent).WithMany(x => x.Children).HasForeignKey(x => x.ParentId);

            modelBuilder.Entity<ForumSubsection>().HasOne(x => x.Section).WithMany(x => x.Subsections).HasForeignKey(x => x.SectionId);
            modelBuilder.Entity<ForumTheme>().HasOne(x => x.Subsection).WithMany(x => x.Themes).HasForeignKey(x => x.SubsectionId);
            modelBuilder.Entity<ForumMessage>().HasOne(x => x.Theme).WithMany(x => x.Messages).HasForeignKey(x => x.ThemeId);

            modelBuilder.Entity<User>().HasOne(x => x.RoleGroup).WithMany(x => x.Users).HasForeignKey(x => x.RoleGroupId);
            modelBuilder.Entity<Role>().HasMany(x => x.RoleGroups);
            modelBuilder.Entity<RoleGroup>().HasMany(x => x.Roles);

            modelBuilder.Entity<PrivateMessage>().HasOne(x => x.Sender).WithMany(x => x.SentPrivateMessages).HasForeignKey(x => x.SenderId);
            modelBuilder.Entity<PrivateMessage>().HasOne(x => x.Receiver).WithMany(x => x.ReceivedPrivateMessages).HasForeignKey(x => x.ReceiverId);

            modelBuilder.Entity<Match>().HasOne(x => x.Club).WithMany(x => x.Matches).HasForeignKey(x => x.ClubId);

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
            base.OnConfiguring(modelBuilder);
        //    modelBuilder.Entity<User>().ToTable("Users");
        //    modelBuilder.Entity<Role>().ToTable("Roles");
        //    modelBuilder.Entity<UserClaim>().ToTable("UserClaims");
        //    modelBuilder.Entity<UserLogin>().ToTable("UserLogins");
        //    modelBuilder.Entity<UserRole>().ToTable("UserRoles");

        //    modelBuilder.Entity<MaterialComment>().HasRequired(x => x.Author).WithMany(x => x.Comments).HasForeignKey(x => x.AuthorId);
        //    modelBuilder.Entity<User>().HasMany(u => u.ForumMessages).WithOptional().HasForeignKey(x => x.AuthorId);


        //    modelBuilder.Entity<Material>().HasRequired(x => x.Author).WithMany(x => x.Materials).HasForeignKey(x => x.AuthorId);
        //    modelBuilder.Entity<Material>().HasRequired(x => x.Category).WithMany(x => x.Materials).HasForeignKey(x => x.CategoryId);
        //    modelBuilder.Entity<MaterialComment>().HasRequired(u => u.Material).WithMany(x => x.Comments).HasForeignKey(x => x.MaterialId);

        //    modelBuilder.Entity<MaterialComment>().HasOptional(x => x.Parent).WithMany(x => x.Children).HasForeignKey(x => x.ParentId);

        //    modelBuilder.Entity<ForumSubsection>().HasRequired(x => x.Section).WithMany(x => x.Subsections).HasForeignKey(x => x.SectionId);
        //    modelBuilder.Entity<ForumTheme>().HasRequired(x => x.Subsection).WithMany(x => x.Themes).HasForeignKey(x => x.SubsectionId);
        //    modelBuilder.Entity<ForumMessage>().HasRequired(x => x.Theme).WithMany(x => x.Messages).HasForeignKey(x => x.ThemeId);

        //    modelBuilder.Entity<User>().HasRequired(x => x.RoleGroup).WithMany(x => x.Users).HasForeignKey(x => x.RoleGroupId);
        //    modelBuilder.Entity<Role>().HasMany(x => x.RoleGroups).WithMany(x => x.Roles);

        //    modelBuilder.Entity<PrivateMessage>().HasRequired(x => x.Sender).WithMany(x => x.SentPrivateMessages).HasForeignKey(x => x.SenderId);
        //    modelBuilder.Entity<PrivateMessage>().HasRequired(x => x.Receiver).WithMany(x => x.ReceivedPrivateMessages).HasForeignKey(x => x.ReceiverId);

        //    modelBuilder.Entity<Match>().HasRequired(x => x.Club).WithMany(x => x.Matches).HasForeignKey(x => x.ClubId);

        //    // использование Fluent API
        //    modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        //    base.OnModelCreating(modelBuilder);
        }

    }
}
