using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
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
            await RemoveOldNotificationsAsync(dto.UserId);
            var model = _mapper.Map<Notification>(dto);
            model = await _notificationRepository.CreateAsync(model);
            return _mapper.Map<NotificationDto>(model);
        }

        public Task<NotificationDto> UpdateAsync(NotificationDto dto)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _notificationRepository.DeleteAsync(id);
            return true;
        }

        public Task<NotificationDto> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<int> GetUnreadCountAsync(int userId)
        {
            return await _notificationRepository.CountAsync(x => x.UserId == userId && !x.IsRead);
        }

        public async Task<IEnumerable<NotificationDto>> GetListAsync(int userId)
        {
            var list = await _notificationRepository.GetListAsync(x => x.UserId == userId, SortOrder.Descending,
                y => y.DateTime);
            return _mapper.Map<IEnumerable<NotificationDto>>(list);
        }

        public async Task<bool> MarkAsReadAsync(int id, int userId)
        {
            var entity = await _notificationRepository.GetByIdAsync(id);
            if (entity != null && !entity.IsRead && entity.UserId == userId)
            {
                entity.IsRead = true;
                await _notificationRepository.UpdateAsync(entity);
            }
            return true;
        }

        private async Task RemoveOldNotificationsAsync(int userId)
        {
            var count = await _notificationRepository.CountAsync(x => x.UserId == userId);
            if (count >= GlobalConstants.NotificationsCount)
            {
                var list = await _notificationRepository.GetListAsync(x => x.IsRead);
                foreach (var notification in list)
                {
                    await DeleteAsync(notification.Id);
                }
            }
        }
    }
}
