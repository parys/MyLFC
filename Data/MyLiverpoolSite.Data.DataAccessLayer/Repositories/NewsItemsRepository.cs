using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{
    public class NewsItemsRepository : INewsItemsRepository
    {
        private readonly LiverpoolContext _context;
        public NewsItemsRepository()
        {
            _context = new LiverpoolContext();
        }

        public async Task<IEnumerable<NewsItem>> Get()
        {
            return await _context.NewsItems.ToListAsync();
        }

        public async Task<NewsItem> GetById(int id)
        {
            return await _context.NewsItems.Include(x => x.Comments).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
