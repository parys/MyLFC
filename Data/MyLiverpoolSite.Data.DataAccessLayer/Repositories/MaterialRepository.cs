using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer.Repositories
{
    public class MaterialRepository : IMaterialRepository
    {
        private readonly LiverpoolContext _context;
        public MaterialRepository()
        {
            _context = new LiverpoolContext();
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
