using System;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;

namespace MyLfc.Application.Tests.Infrastructure;

public class LfcDbContextFactory
{
    public static ILiverpoolContext Create()
    {
        var options = new DbContextOptionsBuilder<FullLiverpoolContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        var context = new FullLiverpoolContext(options);

        context.Database.EnsureCreated();

        return context;
    }

    public static void Destroy(ILiverpoolContext context)
    {
        context.Database.EnsureDeleted();

        context.Dispose();
    }
}
