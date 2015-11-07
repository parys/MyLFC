//using Microsoft.Data.Entity;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Data.DataAccessLayer
//{

//    public class LiverpoolContextOLD : DbContext
//    {
//        public LiverpoolContextOLD()
//            //: base(@"Data Source=Andrew-PC;Initial Catalog=MyLiverpoolDB;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False") 
//    //Data Source=ANDREW-PC;Initial Catalog=NewDbTest;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False")
//        {
//          // Database.SetInitializer<LiverpoolContextOLD>(null);
//           //todo Database.SetInitializer(new DatabaseInitializer());
//        }

//        public DbSet<User> Users { get; set; }

//        public DbSet<BlogItem> BlogItems { get; set; }

//        public DbSet<NewsItem> NewsItems { get; set; }

//        public DbSet<BlogCategory> BlogCategories { get; set; }

//        public DbSet<NewsCategory> NewsCategories { get; set; }

//        public DbSet<BlogComment> Children { get; set; }

//        public DbSet<ForumSection> ForumSections { get; set; }

//        public DbSet<ForumSubsection> ForumSubsections { get; set; }

//        public DbSet<ForumTheme> ForumThemes { get; set; }

//        public DbSet<ForumMessage> ForumMessages { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            // Visual Studio 2015 | Use the LocalDb 12 instance created by Visual Studio
//           // optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Blogging;Trusted_Connection=True;");
//            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\projectsv12;Initial Catalog=LiverpoolDatabase;Integrated Security=True");

//          //  optionsBuilder.UseSqlServer(Startup.Configuration.Get("Data:DefaultConnection:ConnectionString"));
//            // Visual Studio 2013 | Use the LocalDb 11 instance created by Visual Studio
//            //optionsBuilder.UseSqlServer(@"Server=(localdb)\v11.0;Database=Blogging;Trusted_Connection=True;");

//            // Visual Studio 2012 | Use the SQL Express instance created by Visual Studio
//            //optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=Blogging;Trusted_Connection=True;");
//        }

//        protected override void OnModelCreating(ModelBuilder builder)
//        {
//            //builder.Entity<Blog>()
//            //    .Collection(b => b.Posts)
//            //    .InverseReference(p => p.Blog)
//            //    .ForeignKey(p => p.BlogId);
//        }
//    }
//}
