using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using Microsoft.EntityFrameworkCore;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class MaterialRepository : IMaterialRepository
    {
        private readonly LiverpoolContext _context;
        public MaterialRepository()
        {
            _context = LiverpoolContext.Create();
        }

        public async Task<IEnumerable<Material>> Get()
        {
            return await _context.Materials.ToListAsync();
        }

        public async Task<Material> GetById(int id)
        {
            return await _context.Materials.Include(x => x.Comments).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
