using System;
using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using MyLiverpoolSite.Data.Entities;

//using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{

    public class LiverpoolContext : IdentityDbContext<User, Role, int, UserLogin, UserRole, UserClaim>
    //<User, Role, int>
    {


        // private static bool _created;

        public LiverpoolContext()
            : base("DefaultConnection")//, throwIfV1Schema: false)//@"Data Source=Andrew-PC;Initial Catalog=MyLiverpoolDB;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False") 
                                                               //Data Source=ANDREW-PC;Initial Catalog=NewDbTest;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False")
        {
            //Database.SetInitializer<LiverpoolContext>(null);
            //todo Database.SetInitializer(new DatabaseInitializer());
            

            // Create the database and schema if it doesn't exist
            //if (!_created)
            //{
            //    Database.AsRelational().ApplyMigrations();
            //    _created = true;
            //}

        }

        public static LiverpoolContext Create()
        {
            return new LiverpoolContext();
        }

      //  public DbSet<User> Users { get; set; }
       // public DbSet<Role> Roles { get; set; }

        public DbSet<BlogItem> BlogItems { get; set; }

        public DbSet<NewsItem> NewsItems { get; set; }

        public DbSet<BlogCategory> BlogCategories { get; set; }

        public DbSet<NewsCategory> NewsCategories { get; set; }

        public DbSet<BlogComment> Comments { get; set; }

        public DbSet<ForumSection> ForumSections { get; set; }

        public DbSet<ForumSubsection> ForumSubsections { get; set; }

        public DbSet<ForumTheme> ForumThemes { get; set; }

        public DbSet<ForumMessage> ForumMessages { get; set; }
        public DbSet<UserClaim> UserClaims { get; set; }
        public DbSet<UserLogin> UserLogins { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

    //    public DbSet<RoleClaim> RoleClaims { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
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
        //}

        //protected override void OnConfiguring()
        //{
            
        //}
    }


}
