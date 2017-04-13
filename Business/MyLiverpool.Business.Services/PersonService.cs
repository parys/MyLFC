using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class PersonService: IPersonService
    {
        private readonly IMapper _mapper;
        private readonly IPersonRepository _personRepository;
        private readonly IHelperEntityRepository _helperEntityRepository;

        public PersonService(IMapper mapper, IPersonRepository personRepository, IHelperEntityRepository helperEntityRepository)
        {
            _mapper = mapper;
            _personRepository = personRepository;
            _helperEntityRepository = helperEntityRepository;
        }

        public async Task<PersonDto> CreateAsync(PersonDto dto)
        {
            var model = _mapper.Map<Person>(dto);
            var result = await _personRepository.AddAsync(model);
            await _personRepository.SaveChangesAsync();
            return _mapper.Map<PersonDto>(result);
        }

        public async Task<PageableData<PersonDto>> GetListAsync(int page)
        {
            var model = await _personRepository.GetListAsync(page);
            var dto = _mapper.Map<IEnumerable<PersonDto>>(model);
            var count = await _personRepository.GetCountAsync();
            return new PageableData<PersonDto>(dto, page, count, GlobalConstants.ItemPerPage);
        }

        public Task<PersonDto> GetByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<PersonDto> UpdateAsync(PersonDto dto)
        {
            throw new System.NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _personRepository.DeleteAsync(id);
            return true;
        }

        public async Task<PersonDto> GetBestPlayerAsync()
        {
            var playerHelpEntity = await _helperEntityRepository.GetByTypeAsync(HelperEntityType.BestPlayer);
            if (int.TryParse(playerHelpEntity.Value, out int playerId))
            {
                var player = await _personRepository.GetByIdAsync(playerId);
                return _mapper.Map<PersonDto>(player);
            }
            return null;
        }
    }
}
