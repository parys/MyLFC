using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{
    public interface INewsItemsRepository
    {
        Task<IEnumerable<Material>> Get();

        Task<Material> GetById(int id);
    }
}
