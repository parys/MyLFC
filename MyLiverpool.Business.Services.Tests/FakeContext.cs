using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.ResourceAccess;

namespace MyLiverpool.Business.Services.Tests
{
    public class FakeContext : LiverpoolContext
    {
        public FakeContext(DbContextOptions<LiverpoolContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder modelBuilder)
        {
            modelBuilder.UseInMemoryDatabase();
            base.OnConfiguring(modelBuilder);
        }
    }
}
