using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;

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
    }
}
