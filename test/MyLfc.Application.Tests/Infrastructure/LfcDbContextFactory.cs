using System;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;

namespace MyLfc.Application.Tests.Infrastructure
{
    public class LfcDbContextFactory
    {
        public static LiverpoolContext Create()
        {
            var options = new DbContextOptionsBuilder<LiverpoolContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;

            var context = new LiverpoolContext(options);

            context.Database.EnsureCreated();

            return context;
        }

        public static void Destroy(LiverpoolContext context)
        {
            context.Database.EnsureDeleted();

            context.Dispose();
        }
    }
}
