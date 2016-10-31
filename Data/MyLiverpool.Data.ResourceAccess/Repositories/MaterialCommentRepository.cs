using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using Microsoft.EntityFrameworkCore;

namespace MyLiverpool.Data.ResourceAccess.Repositories
{
    public class MaterialCommentRepository : IMaterialCommentRepository
    {
        private readonly LiverpoolContext _context;

        public MaterialCommentRepository(LiverpoolContext context)
        {
            _context = context;
        }
        public async Task<MaterialComment> GetByIdAsync(int id)
        {
            var vv = _context.MaterialComments.Include(x => x.Children).Where(x => x.ParentId != null);
            return await _context.MaterialComments.Include(x => x.Children).FirstOrDefaultAsync(x => x.Id == id);
        }

        public void Add(MaterialComment entity)
        {
            _context.MaterialComments.Add(entity);
        }

        public async Task DeleteAsync(int id)
        {
            var comment = await _context.MaterialComments.FirstOrDefaultAsync(x => x.Id == id);
            if (comment != null)
            {
                await DeleteAsync(comment);
            }
        }

        public Task DeleteAsync(MaterialComment entity)
        {
            _context.MaterialComments.Remove(entity);
            return Task.CompletedTask;
        }

        public void Update(MaterialComment entity)
        {
            _context.MaterialComments.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetCountAsync(Expression<Func<MaterialComment, bool>> filter = null)
        {
            IQueryable<MaterialComment> query = _context.MaterialComments.Include(x => x.Author);
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }

        public async Task<ICollection<MaterialComment>> GetOrderedByAsync(int page, int itemPerPage = 15, Expression<Func<MaterialComment, bool>> filter = null,
             SortOrder order = SortOrder.Ascending, Expression<Func<MaterialComment, object>> orderBy = null)
        {
            IQueryable<MaterialComment> query = _context.MaterialComments.Include(x => x.Children).Include(x => x.Author);

            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                query = query.ObjectSort(orderBy, order);
            }
            query = query.Skip((page - 1) * itemPerPage).Take(itemPerPage);
            return await query.ToListAsync();
        }
    }
}
