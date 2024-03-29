﻿using System.Threading.Tasks;
using MyLfc.Business.Dto;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Business.Contracts;

public interface IForumThemeService
{
    Task<ForumThemeDto> GetAsync(int id, int page);

    Task<ForumThemeDto> GetAsync(int id);

    Task<ForumThemeDto> CreateAsync(ForumThemeDto dto);

    Task<ForumThemeDto> UpdateAsync(ForumThemeDto dto);
}
