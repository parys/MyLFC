using System.Collections.Generic;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Services.Tests.Helpers
{
    public class WishDataGenerator
    {
        public static List<Wish> GetWishes()
        {
            return new List<Wish>()
            {
                new Wish()
                {
                    Type = WishType.Bug,
                    Message = "mes help 1",
                    Title = "title 1",
                    State = WishStateEnum.Default
                },
                new Wish()
                {
                    Type = WishType.BugUi,
                    Message = "mes 2",
                    Title = "title 2",
                    State = WishStateEnum.Default
                },
                new Wish()
                {
                    Type = WishType.Feature,
                    Message = "mes help 3",
                    Title = "title 3",
                    State = WishStateEnum.Default
                },
                new Wish()
                {
                    Type = WishType.Feature,
                    Message = "mes help 4",
                    Title = "title 4",
                    State = WishStateEnum.Default
                },
                new Wish()
                {
                    Type = WishType.Feature,
                    Message = "mes 5",
                    Title = "title 5",
                    State = WishStateEnum.Default
                }
            };
        }

        public static List<WishDto> GetWishDtos()
        {
            return new List<WishDto>()
            {
                new WishDto()
                {
                    Id = 1,
                    Type = (int) WishType.Bug,
                    TypeName = WishType.Bug.GetNameAttribute(),
                    Message = "mes help 1",
                    Title = "title 1",
                    State = (int)WishStateEnum.Default,
                    StateName = WishStateEnum.Default.GetNameAttribute()
                },
                new WishDto()
                {
                    Id = 2,
                    Type = (int) WishType.BugUi,
                    TypeName = WishType.BugUi.GetNameAttribute(),
                    Message = "mes 2",
                    Title = "title 2",
                    State = (int)WishStateEnum.Default,
                    StateName = WishStateEnum.Default.GetNameAttribute()
                },
                new WishDto()
                {
                    Id = 3,
                    Type = (int) WishType.Feature,
                    TypeName = WishType.Feature.GetNameAttribute(),
                    Message = "mes help 3",
                    Title = "title 3",
                    State = (int)WishStateEnum.Default,
                    StateName = WishStateEnum.Default.GetNameAttribute()
                },
                new WishDto()
                {
                    Id = 4,
                    Type = (int) WishType.Feature,
                    TypeName = WishType.Feature.GetNameAttribute(),
                    Message = "mes help 4",
                    Title = "title 4",
                    State = (int)WishStateEnum.Default,
                    StateName = WishStateEnum.Default.GetNameAttribute()
                },
                new WishDto()
                {
                    Id = 5,
                    Type = (int) WishType.Feature,
                    TypeName = WishType.Feature.GetNameAttribute(),
                    Message = "mes 5",
                    Title = "title 5",
                    State = (int)WishStateEnum.Default,
                    StateName = WishStateEnum.Default.GetNameAttribute()
                }
            };
        }
    }
}