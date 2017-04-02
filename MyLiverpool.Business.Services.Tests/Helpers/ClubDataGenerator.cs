using System.Collections.Generic;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Services.Tests.Helpers
{
    public class ClubDataGenerator
    {
        public static List<Club> Get3Clubs()
        {
            return new List<Club>()
            {
                new Club()
                {
                    EnglishName = "mes 1",
                    Name = "title 1",
                    Stadium = "stadium 1",
                    Logo = "logo 1",
                },
                new Club()
                {
                    EnglishName = "mes 2",
                    Name = "title 2",
                    Stadium = "stadium 2",
                    Logo = "logo 2",
                },
                new Club()
                {
                    EnglishName = "mes 3",
                    Name = "title 3",
                    Stadium = "stadium 3",
                    Logo = "logo 3",
                }
            };
        }

        public static List<ClubDto> Get3ClubDtos()
        {
            return new List<ClubDto>()
            {
                new ClubDto()
                {
                    Id = 1,
                    Stadium = "stadium 1",
                    Logo = "logo 1",
                    EnglishName = "mes 1",
                    Name = "title 1"
                },
                new ClubDto()
                {
                    Id = 2,
                    Stadium = "stadium 2",
                    Logo = "logo 2",
                    EnglishName = "mes 2",
                    Name = "title 2"
                },
                new ClubDto()
                {
                    Id = 3,
                    Stadium = "stadium 3",
                    Logo = "logo 3",
                    EnglishName = "mes 3",
                    Name = "title 3"
                }
            };
        }
    }
}
