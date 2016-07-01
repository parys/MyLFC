using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class WishService : IWishService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public WishService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<WishDto> CreateAsync(WishDto dto)
        {
            var wish = _mapper.Map<Wish>(dto);
            _unitOfWork.WishRepository.Add(wish);
            await _unitOfWork.SaveAsync();
            return _mapper.Map<WishDto>(wish);
        }

        public async Task<List<WishDto>> GetListAsync(int page = 1)
        {
            var wishes = await _unitOfWork.WishRepository.GetAsync(page);
            return _mapper.Map<List<WishDto>>(wishes);
        }

        public async Task<WishDto> GetAsync(int wishId)
        {
            var wish = await _unitOfWork.WishRepository.GetByIdAsync(wishId);
            return _mapper.Map<WishDto>(wish);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _unitOfWork.WishRepository.DeleteAsync(id);
            await _unitOfWork.SaveAsync();
            return true;
        }
    }
}
