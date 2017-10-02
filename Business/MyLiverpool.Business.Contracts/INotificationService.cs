using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface INotificationService : IEntityService<NotificationDto>
    {
        Task<int> GetUnreadCountAsync(int userId);

        Task<IEnumerable<NotificationDto>> GetListAsync(int userId);

        Task<bool> MarkAsReadAsync(int id, int userId);
    }
}
