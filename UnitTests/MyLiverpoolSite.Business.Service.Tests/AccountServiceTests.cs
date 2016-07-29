using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Service.Tests
{
    [TestClass]
    public class AccountServiceTests
    {
        private readonly IAccountService _service;
        private readonly Mock<IUnitOfWork> _unitOfWork;
        private readonly Mock<IMapper> _mapper;
        private Mock<IIdentityMessageService> _emailService;

        private UserManager<User, int> _userManager;

        private Mock<IUserStore<User,int>> _userStore;
        private Mock<IUserEmailStore<User, int>> _userEmailStore;
        private Mock<IUserLockoutStore<User, int>> _userLockoutStore;
        private Mock<IUserPasswordStore<User, int>> _userPasswordStore;

        private User _dummyUser;

        public AccountServiceTests()
        {
            _dummyUser = new User()
            {
                UserName = "found",
                Email = "found@c.c",
                Id = 11,
            };

            _unitOfWork = new Mock<IUnitOfWork>();
            _userEmailStore = new Mock<IUserEmailStore<User,int>>();
            _userEmailStore.Setup(x => x.FindByEmailAsync(_dummyUser.Email)).ReturnsAsync(new User());

            _userStore = new Mock<IUserStore<User, int>>();
            _userStore.Setup(x => x.FindByNameAsync(_dummyUser.UserName)).ReturnsAsync(new User());

            _userLockoutStore = new Mock<IUserLockoutStore<User, int>>();
            //_userLockoutStore.Setup(x => x.GetLockoutEndDateAsync(_dummyUser))
            //    .ReturnsAsync(new DateTimeOffset(DateTime.Now));

            _userPasswordStore = new Mock<IUserPasswordStore<User, int>>();

            _mapper = new Mock<IMapper>();
            _emailService = new Mock<IIdentityMessageService>();
            _service = new AccountService(_unitOfWork.Object, _mapper.Object, _emailService.Object);
        }

        [TestMethod]
        [Ignore]
        public void ChangePasswordAsync_()
        {
            var userId = 1;
            var dto = new ChangePasswordDto
            {
                OldPassword = "123456",
                NewPassword = "1234567",
                ConfirmPassword = "1234567"
            };
            SetManager(_userPasswordStore.Object);
            var u = _userManager.Users.ToList();
            var result = _service.ChangePasswordAsync(userId, dto).Result;

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsEmailUniqueAsync_IfNotFound()
        {
            var email = "notFound@c.c";
            SetManager(_userEmailStore.Object);

            var result = _service.IsEmailUniqueAsync(email).Result;

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsEmailUniqueAsync_IfFound()
        {
            SetManager(_userEmailStore.Object);

            var result = _service.IsEmailUniqueAsync(_dummyUser.Email).Result;

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void IsUserNameUniqueAsync_IfNotFound()
        {
            var userName = "notFound";
            SetManager(_userStore.Object);

            var result = _service.IsUserNameUniqueAsync(userName).Result;

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsUserNameUniqueAsync_IfFound()
        {
            SetManager(_userStore.Object);

            var result = _service.IsUserNameUniqueAsync(_dummyUser.UserName).Result;

            Assert.IsFalse(result);
        }

        [TestMethod]
        [ExpectedException(typeof (AggregateException))]
        public void GetLockOutEndDateAsync_IfUserNotExists()
        {
            var userId = 1;
            SetManager(_userLockoutStore.Object);
            var result = _service.GetLockOutEndDateAsync(userId).Result;
        }

        [TestMethod]
        [Ignore]
        public void GetLockOutEndDateAsync_IfUserExists()
        {
            SetManager(_userLockoutStore.Object);
            var result = _service.GetLockOutEndDateAsync(_dummyUser.Id).Result;

            Assert.AreEqual(true, result);
        }

        public void UpdateLastModifiedAsync_()
        {
            SetManager(_userStore.Object);

            var result = _service.UpdateLastModifiedAsync(_dummyUser.Id).Result;
        }




        private void SetManager(IUserStore<User, int> store)
        {
            _userManager = new UserManager<User, int>(store);
         //   _us
            _unitOfWork.SetupProperty(x => x.UserManager, _userManager);
        }
    }
}
