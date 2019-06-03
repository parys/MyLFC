using System;
using AutoMapper;
using MyLfc.Persistence;

namespace MyLfc.Application.Tests.Infrastructure
{
    public abstract class BaseTestFixture : IDisposable
    {
        public LiverpoolContext Context { get; }
        public IMapper Mapper { get; }

        protected BaseTestFixture()
        {
            Context = LfcDbContextFactory.Create();
            Mapper = AutoMapperFactory.Create();
        }

        public void Dispose()
        {
            LfcDbContextFactory.Destroy(Context);
        }
    }
}
