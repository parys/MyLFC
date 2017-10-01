using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class NotificationService : INotificationService
    {
        private readonly IGenericRepository<Notification> _notificationRepository;
        private readonly IMapper _mapper;

        public NotificationService(IGenericRepository<Notification> notificationRepository, IMapper mapper)
        {
            _notificationRepository = notificationRepository;
            _mapper = mapper;
        }

        public async Task<NotificationDto> CreateAsync(NotificationDto dto)
        {
            throw new NotImplementedException();
        }

        public async Task<NotificationDto> UpdateAsync(NotificationDto dto)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<NotificationDto> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<int> GetUnreadCountAsync(int userId)
        {
            return await _notificationRepository.GetCountAsync(x => x.UserId == userId && !x.IsRead);
        }

        public async Task<IEnumerable<NotificationDto>> GetListAsync(int userId)
        {
            var list = await _notificationRepository.GetListAsync(filter: x => x.UserId == userId && !x.IsRead,  order: SortOrder.Ascending,
                orderBy: y => y.Id);
            return _mapper.Map<IEnumerable<NotificationDto>>(list);
        }
    }
}
