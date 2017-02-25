using System.Threading.Tasks;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class HelperService : IHelperService
    {
        private readonly IHelperEntityRepository _helperEntityRepository;

        public HelperService(IHelperEntityRepository helperEntityRepository)
        {
            _helperEntityRepository = helperEntityRepository;
        }

        public async Task<string> GetEplTableAsync()
        {
            var entity = await _helperEntityRepository.GetByTypeAsync(HelperEntityType.EplTable);
            return entity?.Value;
        }
    }
}
