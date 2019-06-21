using System;
using System.Collections.Generic;
using System.Security.Claims;
using AutoMapper;
using MyLfc.Application.Infrastructure;
using MyLfc.Persistence;

namespace MyLfc.Application.Tests.Infrastructure
{
    public abstract class BaseTestFixture : IDisposable
    {
        public LiverpoolContext Context { get; }
        public IMapper Mapper { get; }
        public RequestContext RequestContext { get; }

        protected BaseTestFixture()
        {
            Context = LfcDbContextFactory.Create();
            Mapper = AutoMapperFactory.Create();
            RequestContext = new RequestContext
            {
                UserId = 1,
                User = new ClaimsPrincipal(new ClaimsIdentity(new List<Claim>()))
            };
        }

        public void Dispose()
        {
            LfcDbContextFactory.Destroy(Context);
        }
    }
}
