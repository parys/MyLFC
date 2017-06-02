using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
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

        public async Task<PersonDto> GetByIdAsync(int id)
        {
            var person = await _personRepository.GetByIdAsync(id);
            return _mapper.Map<PersonDto>(person);
        }

        public async Task<PersonDto> UpdateAsync(PersonDto dto)
        {
            var person = await _personRepository.GetByIdAsync(dto.Id);
            if (person == null)
            {
                return null;
            }
            person.Birthday = dto.Birthday;
            person.FirstName = dto.FirstName;
            person.FirstRussianName = dto.FirstRussianName;
            person.LastName = dto.LastName;
            person.LastRussianName = dto.LastRussianName;
            person.Photo = dto.Photo;
            person.Type = dto.Type;
            person.Position = dto.Position;
            person.Country = dto.Country;
            _personRepository.Update(person);
            await _personRepository.SaveChangesAsync();
            return _mapper.Map<PersonDto>(person);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _personRepository.DeleteAsync(id);
            return true;
        }

        public async Task<PersonDto> GetBestPlayerAsync()
        {
            var playerHelpEntity = await _helperEntityRepository.GetByTypeAsync(HelperEntityType.BestPlayer);
            if (playerHelpEntity != null && int.TryParse(playerHelpEntity.Value, out int playerId))
            {
                var player = await _personRepository.GetByIdAsync(playerId);
                return _mapper.Map<PersonDto>(player);
            }
            return null;
        }

        public async Task SetBestPlayerAsync(int personId)
        {
            //var entity = new HelpEntity()
            //{
            //    Type = HelperEntityType.BestPlayer,
            //    Value = personId.ToString()
            //};
            //await _helperEntityRepository.UpdateAndSaveAsync(entity);
        }

        public async Task<IEnumerable<PersonDto>> GetStuffListAsync()
        {
            var stuffList1 = await _personRepository.GetListAsync(1, 1000, x => x.Type == PersonType.Stuff);
            var stuffList = stuffList1.ToList();
            var tempList = new List<Person>();
            var coach = stuffList.FirstOrDefault(x => x.Position == "Главный тренер");
            if (coach != null)
            {
                tempList.Add(coach);
                stuffList.Remove(coach);
            }
            var assistants = stuffList.Where(x => x.Position == "Помощник тренера").ToList();
            if(assistants.Any())
            {
                foreach (var assistant in assistants)
                {
                    tempList.Add(assistant);
                    stuffList.Remove(assistant);
                }
            }
            tempList.AddRange(stuffList);
            return _mapper.Map<IEnumerable<PersonDto>>(tempList);
        }
    }
}
