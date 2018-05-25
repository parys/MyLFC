using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class PmService : IPmService
    {
        private readonly IGenericRepository<PrivateMessage> _pmRepository;
        private readonly IEmailSender _messageService;
        private readonly IMapper _mapper;

        public PmService(IGenericRepository<PrivateMessage> pmRepository, IMapper mapper, IEmailSender messageService)
        {
            _pmRepository = pmRepository;
            _mapper = mapper;
            _messageService = messageService;
        }

        public async Task<PrivateMessagesDto> GetListAsync(int id)
        {
            var messages = await _pmRepository.GetListAsync(true, x => x.ReceiverId == id || x.SenderId == id,
                SortOrder.Ascending, x => x.SentTime, x => x.Receiver, y => y.Sender);
            var dto = new PrivateMessagesDto
            {
                Received = _mapper.Map<ICollection<PrivateMessageMiniDto>>(messages.Where(x => x.ReceiverId == id).OrderByDescending(x => x.SentTime)),
                Sent = _mapper.Map<ICollection<PrivateMessageMiniDto>>(messages.Where(x => x.SenderId == id).OrderByDescending(x => x.SentTime))
            };
            return dto;
        }

        public async Task<PrivateMessageDto> GetAsync(int messageId, int userId)
        {
            var message = await _pmRepository.GetByIdAsync(messageId, false, x => x.Receiver, y => y.Sender);
            if (message.ReceiverId != userId && message.SenderId != userId)
            {
                throw new UnauthorizedAccessException();
            }
            if (!message.IsRead && message.ReceiverId == userId)
            {
                message.IsRead = true;
                await _pmRepository.UpdateAsync(message);
            }
            return _mapper.Map<PrivateMessageDto>(message);
        }

        public async Task<bool> SaveAsync(PrivateMessageDto model)
        {
            await RemoveOldMessagesAsync(model.SenderId);
            await RemoveOldMessagesAsync(model.ReceiverId);

            var message = _mapper.Map<PrivateMessage>(model);
            message.SentTime = DateTime.Now;
            try
            {
                message = await _pmRepository.CreateAsync(message);
                await _messageService.SendNewPmToEmailAsync(message.ReceiverId, message.Message, message.Id);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<int> GetUnreadPmCountAsync(int userId)
        {
             return await _pmRepository.CountAsync(x => !x.IsRead && x.ReceiverId == userId);
        }

        private async Task RemoveOldMessagesAsync(int userId)
        {
            var countUserMessages = await _pmRepository.CountAsync(x => x.ReceiverId == userId || x.SenderId == userId);
            if (countUserMessages > GlobalConstants.PmsPerUser)
            {
                var messages =
                    await _pmRepository.GetListAsync(false, x => x.ReceiverId == userId || x.SenderId == userId);
                await _pmRepository.DeleteRangeAsync(messages.Take(GlobalConstants.PmsPerUser / 2).ToList());
            }
        }
    }
}
