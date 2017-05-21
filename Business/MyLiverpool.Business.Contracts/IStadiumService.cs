﻿using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Contracts
{
    public interface IStadiumService
    {
        Task<StadiumDto> GetByIdAsync(int id);

        //bug temporary
        Task<IEnumerable<StadiumDto>> GeListAsync();
        Task<PageableData<StadiumDto>> GeListAsync(int page);

        Task<StadiumDto> CreateAsync(StadiumDto dto);

        Task<StadiumDto> UpdateAsync(StadiumDto dto);

        Task<bool> DeleteAsync(int id);

        Task<IEnumerable<StadiumDto>> GetListByNameAsync(string typed);
    }
}
