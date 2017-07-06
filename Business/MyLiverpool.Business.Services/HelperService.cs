using System.Threading.Tasks;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
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

        public async Task<string> GetAsync(HelperEntityType type)
        {
            var entity = await _helperEntityRepository.GetByTypeAsync(type);
            return entity?.Value;
        }

        public async Task<bool> UpdateAsync(HelperEntityType type, string newValue)
        {
            var entity = await _helperEntityRepository.GetByTypeAsync(type) ?? new HelpEntity
            {
                Type = type
            };
            entity.Value = newValue;
            await _helperEntityRepository.UpdateAndSaveAsync(entity);
            return true;
        }
    }
}
