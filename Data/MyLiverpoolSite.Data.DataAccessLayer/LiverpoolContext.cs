using System;
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


        // private static bool _created;

        public LiverpoolContext()
            : base("DefaultConnection")//, throwIfV1Schema: false)//@"Data Source=Andrew-PC;Initial Catalog=MyLiverpoolDB;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False") 
                                                               //Data Source=ANDREW-PC;Initial Catalog=NewDbTest;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False")
        {
            //todo
            //Database.SetInitializer<LiverpoolContext>(null);
            Database.SetInitializer(new DatabaseInitializer());
            

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
        public DbSet<NewsComment> Comments { get; set; }
        public DbSet<ForumSection> ForumSections { get; set; }
        public DbSet<ForumSubsection> ForumSubsections { get; set; }
        public DbSet<ForumTheme> ForumThemes { get; set; }
        public DbSet<ForumMessage> ForumMessages { get; set; }
        public DbSet<UserClaim> UserClaims { get; set; }
        public DbSet<UserLogin> UserLogins { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<RoleGroup> RoleGroups { get; set; }
        public DbSet<PrivateMessage> PrivateMessages { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Role>().ToTable("Roles");
            modelBuilder.Entity<UserClaim>().ToTable("UserClaims");
            modelBuilder.Entity<UserLogin>().ToTable("UserLogins");
            modelBuilder.Entity<UserRole>().ToTable("UserRoles");

          //  modelBuilder.Entity<User>().HasMany(u => u.NewsComments).WithOptional().HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<User>().HasMany(u => u.BlogComments).WithOptional().HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<NewsComment>().HasRequired(x => x.Author).WithMany(x => x.NewsComments).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<BlogComment>().HasRequired(x => x.Author).WithMany(x => x.BlogComments).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<User>().HasMany(u => u.ForumMessages).WithOptional().HasForeignKey(x => x.AuthorId);
           // modelBuilder.Entity<User>().HasMany(u => u.Roles).WithMany(x => x.)WithOptional();

        //    modelBuilder.Entity<User>().HasMany(u => u.BlogItems).WithOptional();
        //    modelBuilder.Entity<User>().HasMany(u => u.NewsItems).WithOptional();

            modelBuilder.Entity<NewsItem>().HasRequired(x => x.Author).WithMany(x => x.NewsItems).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<BlogItem>().HasRequired(x => x.Author).WithMany(x => x.BlogItems).HasForeignKey(x => x.AuthorId);
            modelBuilder.Entity<NewsItem>().HasRequired(x => x.NewsCategory).WithMany(x => x.NewsItems).HasForeignKey(x => x.NewsCategoryId);
            modelBuilder.Entity<BlogItem>().HasRequired(x => x.BlogCategory).WithMany(x => x.BlogItems).HasForeignKey(x => x.BlogCategoryId);
           // modelBuilder.Entity<NewsCategory>().HasMany(u => u.NewsItems);
          //  modelBuilder.Entity<BlogCategory>().HasMany(u => u.BlogItems);
          //  modelBuilder.Entity<NewsItem>().HasMany(u => u.Comments).WithRequired(x => x.NewsItem).HasForeignKey(x => x.NewsItemId);
          //  modelBuilder.Entity<BlogItem>().HasMany(u => u.Comments).WithRequired(x => x.BlogItem).HasForeignKey(x => x.BlogItemId);
        //    modelBuilder.Entity<NewsComment>().HasRequired(u => u.NewsItem).WithRequiredPrincipal();//.HasForeignKey(x => x.NewsItemId);
        //    modelBuilder.Entity<BlogComment>().HasRequired(u => u.BlogItem).WithRequiredPrincipal();//.HasForeignKey(x => x.NewsItemId);
              modelBuilder.Entity<BlogComment>().HasRequired(u => u.BlogItem).WithMany(x => x.Comments).HasForeignKey(x => x.BlogItemId);
              modelBuilder.Entity<NewsComment>().HasRequired(u => u.NewsItem).WithMany(x => x.Comments).HasForeignKey(x => x.NewsItemId);
            //   modelBuilder.Entity<NewsComment>().HasRequired(u => u.Author).WithMany(x => x.NewsComments).HasForeignKey(x => x.AuthorId);

            modelBuilder.Entity<NewsComment>().HasOptional(x => x.Parent).WithMany(x => x.Children).HasForeignKey(x => x.ParentId);
            modelBuilder.Entity<BlogComment>().HasOptional(x => x.Parent).WithMany(x => x.Children).HasForeignKey(x => x.ParentId);

            modelBuilder.Entity<ForumSubsection>().HasRequired(x => x.Section).WithMany(x => x.Subsections).HasForeignKey(x => x.SectionId);
            modelBuilder.Entity<ForumTheme>().HasRequired(x => x.Subsection).WithMany(x => x.Themes).HasForeignKey(x => x.SubsectionId);
            modelBuilder.Entity<ForumMessage>().HasRequired(x => x.Theme).WithMany(x => x.Messages).HasForeignKey(x => x.ThemeId);

            modelBuilder.Entity<User>().HasRequired(x => x.RoleGroup).WithMany(x => x.Users).HasForeignKey(x => x.RoleGroupId);
            modelBuilder.Entity<Role>().HasMany(x => x.RoleGroups).WithMany(x => x.Roles);//.HasForeignKey(x => x.RoleGroupId);

          //  modelBuilder.Entity<PrivateMessage>().HasRequired(x => x.Sender).WithMany(x => x.PrivateMessages).HasForeignKey(x => x.SenderId);
          //  modelBuilder.Entity<PrivateMessage>().HasRequired(x => x.Receiver).WithMany(x => x.PrivateMessages).HasForeignKey(x => x.ReceiverId);
           // modelBuilder.Entity<User>().HasMany(u => u.Children).
            // использование Fluent API
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>(); 
            base.OnModelCreating(modelBuilder);
        }

        //    public System.Data.Entity.DbSet<MyLiverpoolSite.Business.ViewModels.News.IndexNewsViewModel> IndexNewsViewModels { get; set; }

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
