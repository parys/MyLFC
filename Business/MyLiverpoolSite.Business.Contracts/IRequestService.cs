using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IRequestService
    {
        Task<List<RequestDto>> GetListAsync(int page = 1);

       // Task<Request> GetAsync(int messageId, int userId);

       // Task<bool> SaveAsync(RequestDto model);
    }
}