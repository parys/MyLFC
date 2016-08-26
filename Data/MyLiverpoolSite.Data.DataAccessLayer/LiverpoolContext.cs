using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Microsoft.AspNet.Identity.EntityFramework;
using MyLiverpoolSite.Data.Entities;

//using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{

    public class LiverpoolContext : IdentityDbContext<User, Role, int, UserLogin, UserRole, UserClaim>
    //<User, Role, int>
    {
      //  private static bool _created;

        public LiverpoolContext()
          //  : base("DefaultConnection")//, throwIfV1Schema: false)//@"Data Source=Andrew-PC;Initial Catalog=MyLiverpoolDB;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False") 
            : base("Server=.;Initial Catalog=MyLiverpool1;Trusted_Connection=True;MultipleActiveResultSets=true")//, throwIfV1Schema: false)//@"Data Source=Andrew-PC;Initial Catalog=MyLiverpoolDB;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False") 
                                                               //Data Source=ANDREW-PC;Initial Catalog=NewDbTest;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False")
        {

            // Create the database and schema if it doesn't exist
            //   if (!_created)
            //  {
            //  _created = true;

            //      Database.Create();
            //    Database.AsRelational().ApplyMigrations();

            // }

        }

        public static LiverpoolContext Create()
        {
            return new LiverpoolContext();
        }
        
        public DbSet<Wish> Wishs { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<MaterialCategory> MaterialCategories { get; set; }
        public DbSet<MaterialComment> MaterialComments { get; set; }
        public DbSet<ForumSection> ForumSections { get; set; }
        public DbSet<ForumSubsection> ForumSubsections { get; set; }
        public DbSet<ForumTheme> ForumThemes { get; set; }
        public DbSet<ForumMessage> ForumMessages { get; set; }
        public DbSet<UserClaim> UserClaims { get; set; }
        public DbSet<UserLogin> UserLogins { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<RoleGroup> RoleGroups { get; set; }
        public DbSet<PrivateMessage> PrivateMessages { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<Match> Matches { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Role>().ToTable("Roles");
            modelBuilder.Entity<UserClaim>().ToTable("UserClaims");
            modelBuilder.Entity<UserLogin>().ToTable("UserLogins");
            modelBuilder.Entity<UserRole>().ToTable("UserRoles");
            
            modelBuilder.Entity<MaterialComment>().HasRequired(x => x.Author).WithMany(x => x.Comments).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<User>().HasMany(u => u.ForumMessages).WithOptional().HasForeignKey(x => x.AuthorId);
           

            modelBuilder.Entity<Material>().HasRequired(x => x.Author).WithMany(x => x.Materials).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<Material>().HasRequired(x => x.Category).WithMany(x => x.Materials).HasForeignKey(x => x.CategoryId);
            modelBuilder.Entity<MaterialComment>().HasRequired(u => u.Material).WithMany(x => x.Comments).HasForeignKey(x => x.MaterialId);

            modelBuilder.Entity<MaterialComment>().HasOptional(x => x.Parent).WithMany(x => x.Children).HasForeignKey(x => x.ParentId);

            modelBuilder.Entity<ForumSubsection>().HasRequired(x => x.Section).WithMany(x => x.Subsections).HasForeignKey(x => x.SectionId);
            modelBuilder.Entity<ForumTheme>().HasRequired(x => x.Subsection).WithMany(x => x.Themes).HasForeignKey(x => x.SubsectionId);
            modelBuilder.Entity<ForumMessage>().HasRequired(x => x.Theme).WithMany(x => x.Messages).HasForeignKey(x => x.ThemeId);

            modelBuilder.Entity<User>().HasRequired(x => x.RoleGroup).WithMany(x => x.Users).HasForeignKey(x => x.RoleGroupId);
            modelBuilder.Entity<Role>().HasMany(x => x.RoleGroups).WithMany(x => x.Roles);

            modelBuilder.Entity<PrivateMessage>().HasRequired(x => x.Sender).WithMany(x => x.SentPrivateMessages).HasForeignKey(x => x.SenderId);
            modelBuilder.Entity<PrivateMessage>().HasRequired(x => x.Receiver).WithMany(x => x.ReceivedPrivateMessages).HasForeignKey(x => x.ReceiverId);

            modelBuilder.Entity<Match>().HasRequired(x => x.Club).WithMany(x => x.Matches).HasForeignKey(x => x.ClubId);

            // использование Fluent API
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>(); 
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

        //protected override void OnConfiguring()
        //{

        //}

    }
}
