using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class PersonService: IPersonService
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Person> _personRepository;

        public PersonService(IMapper mapper, IGenericRepository<Person> personRepository)
        {
            _mapper = mapper;
            _personRepository = personRepository;
        }
        
        //public async Task SetBestPlayerAsync(int personId)
        //{
            //var entity = new HelpEntity()
            //{
            //    Type = HelperEntityType.BestPlayer,
            //    Value = personId.ToString()
            //};
            //await _helperEntityService.UpdateAndSaveAsync(entity);
        //}
        
        public async Task<SquadListDto> GetSquadListAsync(PersonType type)
        {
            Expression<Func<Person, bool>> filter = x => true;
            if (type == PersonType.Loan)
            {
                filter = x => x.Transfers.Any(y => y.OnLoan && !y.Coming && y.FinishDate.Value.Date >= DateTime.Today.Date);
            }
            else if (type == PersonType.First)
            {
                filter = x => x.Type == PersonType.First &&
                              !x.Transfers.Any(y => y.OnLoan && !y.Coming &&
                                                   y.FinishDate.Value.Date >= DateTime.Today.Date);
            }
            else if (type == PersonType.Academy)
            {
                filter = x => x.Type == PersonType.Academy &&
                              !x.Transfers.Any(y => y.OnLoan && !y.Coming &&
                                                    y.FinishDate.Value.Date >= DateTime.Today.Date);
            }
            var squadList1 = await _personRepository.GetListAsync(filter: filter);
            var squadList = _mapper.Map<IEnumerable<PersonDto>>(squadList1).ToList();
            var goalkeepers = squadList.Where(x => x.Position == "Вратарь");
            var defenders = squadList.Where(x => x.Position == "Защитник");
            var midfielders = squadList.Where(x => x.Position == "Полузащитник");
            var strikers = squadList.Where(x => x.Position == "Форвард");
            return new SquadListDto
            {
                Goalkeepers = goalkeepers.OrderBy(x => x.Number),
                Defenders = defenders.OrderBy(x => x.Number),
                Midfielders = midfielders.OrderBy(x => x.Number),
                Strikers = strikers.OrderBy(x => x.Number)
            };
        }
    }
}

