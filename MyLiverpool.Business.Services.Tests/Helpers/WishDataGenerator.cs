using System.Collections.Generic;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Services.Tests.Helpers
{
    public class WishDataGenerator
    {
        public static List<Wish> Get3Wish()
        {
            return new List<Wish>()
            {
                new Wish()
                {
                    Type = WishType.Bug,
                    Message = "mes 1",
                    Title = "title 1"
                },
                new Wish()
                {
                    Type = WishType.BugUi,
                    Message = "mes 2",
                    Title = "title 2"
                },
                new Wish()
                {
                    Type = WishType.Feature,
                    Message = "mes 3",
                    Title = "title 3"
                }
            };
        }

        public static List<WishDto> Get3WishDto()
        {
            return new List<WishDto>()
            {
                                new WishDto()
                {
                                    Id = 1,
                    Type =  (int)WishType.Bug,
                    TypeName = WishType.Bug.GetNameAttribute(),
                    Message = "mes 1",
                    Title = "title 1"
                },
                new WishDto()
                {
                                    Id = 2,
                    Type = (int)WishType.BugUi,
                    TypeName = WishType.BugUi.GetNameAttribute(),
                    Message = "mes 2",
                    Title = "title 2"
                },
                new WishDto()
                {
                                    Id = 3,
                    Type = (int)WishType.Feature,
                    TypeName = WishType.Feature.GetNameAttribute(),
                    Message = "mes 3",
                    Title = "title 3"
                }
            };
        }
    }
}
