using System;
using System.Web.Http.Results;
using System.Web.Script.Serialization;
using AutoMapper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.MapperConfigurations.Profiles;
using MyLiverpool.Web.WebApi.Controllers;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;

namespace MyLiverpool.Web.WebApi.Tests
{
    [TestClass]
    public class ClubControllerTests
    {
        private readonly IUnitOfWork _unitOfWork = new UnitOfWork();
        private readonly IMapper _mapper = new MapperConfiguration(cfg => {
            cfg.AddProfile(new ClubMapperProfile());
            cfg.AddProfile(new ForumMessageMapperProfile());
            cfg.AddProfile(new ForumSectionMapperProfile());
            cfg.AddProfile(new ForumSubsectionMapperProfile());
            cfg.AddProfile(new ForumThemeMapperProfile());
            cfg.AddProfile(new MaterialMapperProfile());
            cfg.AddProfile(new MaterialCategoryMapperProfile());
            cfg.AddProfile(new MaterialCommentMapperProfile());
            cfg.AddProfile(new PmMapperProfile());
            cfg.AddProfile(new RoleGroupsMapperProfile());
            cfg.AddProfile(new UserMapperProfile());
            cfg.AddProfile(new WishMapperProfile());
        }).CreateMapper();


        [TestMethod]
        public void CreateAsync_Success()
        {
            var controller = new ClubController(new ClubService(_unitOfWork, _mapper));
            var dto = new ClubDto()
            {
                Name = "testName",
                EnglishName = "english Test Name",
                Stadium = "stadium",
                Logo = "testPath"
            };

            var result = (controller.CreateAsync(dto).Result as OkNegotiatedContentResult<ClubDto>).Content;
            var resultClubFromUOW = _unitOfWork.ClubRepository.GetByIdAsync(result.Id).Result;
            var resultClubDto = _mapper.Map<ClubDto>(resultClubFromUOW);
            Assert.AreEqual(GetObjectAsJson(result), GetObjectAsJson(resultClubDto));
        }

        [TestMethod]
        public void CreateAsync_Fail_IfDtoNull()
        {
            var controller = new ClubController(new ClubService(_unitOfWork, _mapper));

            var result = controller.CreateAsync(null).Result;
            var resultAsOk = result as OkNegotiatedContentResult<ClubDto>;
            var resultAsBadRequest = result as BadRequestResult;

            Assert.IsNull(resultAsOk);
            Assert.IsNotNull(resultAsBadRequest);
        }

        [TestMethod]
        public void CreateAsync_Fail_IfDtoEmpty()
        {
            var controller = new ClubController(new ClubService(_unitOfWork, _mapper));
            var dto = new ClubDto()
            {
                Name = "testName",
                EnglishName = "english Test Name",
                Stadium = "stadium",
                Logo = "testPath"
            };

            var result = controller.CreateAsync(new ClubDto()).Result;
            var resultAsOk = result as OkNegotiatedContentResult<ClubDto>;
            var resultAsBadRequest = result as BadRequestResult;

            Assert.IsNull(resultAsOk);
            Assert.IsNotNull(resultAsBadRequest);
        }



        public string GetObjectAsJson(object obj)
        {
            JavaScriptSerializer oSerializer = new JavaScriptSerializer();
            return oSerializer.Serialize(obj);
        }
    }
}
