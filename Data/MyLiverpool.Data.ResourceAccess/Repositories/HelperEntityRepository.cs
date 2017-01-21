using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class HelperEntityRepository : IHelperEntityRepository
    {
        private readonly LiverpoolContext _context;

        public HelperEntityRepository(LiverpoolContext context)
        {
            _context = context;
        }

        public async Task<HelpEntity> GetByTypeAsync(HelperEntityType type)
        {
            return await _context.HelpEntities.FirstOrDefaultAsync(x => x.Type == type);
        }

        public async Task<HelpEntity> UpdateAndSaveAsync(HelpEntity entity)
        {
            if (entity.Id == 0)
            {
                await _context.HelpEntities.AddAsync(entity);
            }
            else
            {
                _context.HelpEntities.Update(entity);
            }
            await _context.SaveChangesAsync();
            return entity;
        }
    }
}
