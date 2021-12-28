using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Moq;
using MyLfc.Application.Infrastructure;
using MyLfc.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure
{
    public abstract class BaseTestFixture : IDisposable
    {
        public ILiverpoolContext Context { get; }
        public IMapper Mapper { get; }

        public IWebHostEnvironment Environment { get; }
        public RequestContext AdminRequestContext { get; }

        protected BaseTestFixture()
        {
            Context = LfcDbContextFactory.Create();
            Mapper = AutoMapperFactory.Create();

            Environment = new Mock<IWebHostEnvironment>().Object;
            
            AdminRequestContext = new RequestContext
            {
                UserId = 1,
                User = new ClaimsPrincipal(new ClaimsIdentity(GetClaims(), 
                    "Identity.Application", "name", "role"))
            };
        }

        public void Dispose()
        {
            LfcDbContextFactory.Destroy(Context);
        }

        private static IEnumerable<Claim> GetClaims()
        {
            var result = Enum.GetNames(typeof(RolesEnum))
                .Select(name => new Claim("role", name, "http://www.w3.org/2001/XMLSchema#string", "LOCAL AUTHORITY"))
                .ToList();
            result.Add(new Claim("sub", "1", "http://www.w3.org/2001/XMLSchema#string", "LOCAL AUTHORITY"));
            result.Add(new Claim("name", "admin", "http://www.w3.org/2001/XMLSchema#string", "LOCAL AUTHORITY"));

            return result;
        }
    }
}
