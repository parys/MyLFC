//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Microsoft.AspNet.Identity;
//using Moq;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Business.Service.Tests
//{
//    public class FakeUserManager : UserManager<User, int>
//    {
//        public FakeUserManager()
//            : base(new Mock<IUserStore<User,int>>().Object )
//                //  new Mock<IOptions<IdentityOptions>>().Object,
//                 // new Mock<IPasswordHasher>().Object,
//                //  new IUserValidator<User>[0],
//                //  new IPasswordValidator<User,int>[0],
//                //  new Mock<ILookupNormalizer>().Object,
//               //   new Mock<IdentityErrorDescriber>().Object,
//                //  new Mock<IServiceProvider>().Object)
//                //  new Mock<ILogger<UserManager<User,int>>>().Object,
//                //  new Mock<IHttpContextAccessor>().Object)
//        { }

//        public override Task<User> FindByEmailAsync(string email)
//        {
//            return Task.FromResult(new User { Email = email });
//        }

//        //public override Task<bool> IsEmailConfirmedAsync(User user)
//        //{
//        //    return Task.FromResult(user.Email == "test@test.com");
//        //}

//        //public override Task<string> GeneratePasswordResetTokenAsync(User user)
//        //{
//        //    return Task.FromResult("---------------");
//        //}
//    }
//}
