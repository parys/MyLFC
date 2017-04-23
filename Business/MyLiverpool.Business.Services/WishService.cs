using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class WishService : IWishService
    {
        private readonly IMapper _mapper;
        private readonly IEmailSender _emailService;
        private readonly IWishRepository _wishRepository;

        public WishService(IMapper mapper, IEmailSender emailService, IWishRepository wishRepository)
        {
            _mapper = mapper;
            _emailService = emailService;
            _wishRepository = wishRepository;
        }

        public async Task<WishDto> CreateAsync(WishDto dto)
        {
            var wish = _mapper.Map<Wish>(dto);
            wish = await _wishRepository.AddAsync(wish);
            await _wishRepository.SaveChangesAsync();
            await SendAlertAsync(wish.Message);
            return _mapper.Map<WishDto>(wish);
        }

        public async Task<PageableData<WishDto>> GetListAsync(int page, int? typeId = null, string filterText = null)
        {
            Expression<Func<Wish, bool>> filter = x => true;
            if (typeId.HasValue)
            {
                filter = filter.And(x => (int)x.Type == typeId.Value);
            }
            if (!string.IsNullOrWhiteSpace(filterText) && filterText != "undefined")
            {
                filter = filter.And(x => x.Title.Contains(filterText) || x.Message.Contains(filterText));
            }
            var wishes = await _wishRepository.GetOrderedByAsync(page, filter : filter, order: SortOrder.Descending, orderBy: x => x.Id);
            var wishesDto = _mapper.Map<IEnumerable<WishDto>>(wishes);
            var wishesCount = await _wishRepository.GetCountAsync(filter);
            return new PageableData<WishDto>(wishesDto, page, wishesCount);
        }

        public async Task<WishDto> GetAsync(int wishId)
        {
            var wish = await _wishRepository.GetByIdAsync(wishId);
            return _mapper.Map<WishDto>(wish);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _wishRepository.DeleteAsync(id);
            await _wishRepository.SaveChangesAsync();
            return true;
        }

        private async Task SendAlertAsync(string message)
        {
            try
            {
                await _emailService.SendEmailAsync("Новое пожелание", message);
            }
            catch{} // think what to do
        }
    }
}
