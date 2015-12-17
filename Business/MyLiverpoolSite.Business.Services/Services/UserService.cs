using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Users;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public CreateUserViewModel GetCreateViewModel()
        {
            return new CreateUserViewModel();
        }

        public bool IsModelValid(CreateUserViewModel model)
        {
            //todo make this checking model
            return true;
        }

        public void Create(CreateUserViewModel model)
        {
            //todo
           // var user = Mapper.Map<CreateUserViewModel, User>(model);
           // _unitOfWork.UserRepository.Add(user);
           // _unitOfWork.Save();
        }

        public async Task<PageableData<UserViewModel>> GetAll(int page)
        {
            var users = await _unitOfWork.UserRepository.GetAsync(page);
            var usersVM = Mapper.Map<IEnumerable<UserViewModel>>(users);
            var allUsersCount = await _unitOfWork.UserRepository.GetCountAsync();
            var result = new PageableData<UserViewModel>(usersVM, page, allUsersCount);
            return result;
        }

        public async Task<UserViewModel> GetUserProfile(int id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            var result = Mapper.Map<UserViewModel>(user);
            return result;
        }

        public async Task<PrivateMessageVM> GetPrivateMessageVMAsync(int receiverId)
        {
            var receiver = await _unitOfWork.UserRepository.GetByIdAsync(receiverId);
            return new PrivateMessageVM()
            {
                Receiver = receiver,
                ReceiverId = receiverId
            };
        }

        public async Task<int> SavePrivateMessageVMAsync(PrivateMessageVM model, int userId)
        {
            var message = Mapper.Map<PrivateMessage>(model);
            message.SenderId = userId;
            message.SentTime = DateTime.Now;
            _unitOfWork.PrivateMessageRepository.Add(message);
            await _unitOfWork.SaveAsync();
            return message.Id;
        }

        public async Task<AllPrivateMessagesVM> GetPrivateMessagesForUser(int userId)
        {
            var allMessages = await 
                _unitOfWork.PrivateMessageRepository.GetAsync(x => x.ReceiverId == userId || x.SenderId == userId);
            var allMessagesVm = Mapper.Map<IEnumerable<PrivateMessageVM>>(allMessages);
            var model = new AllPrivateMessagesVM()
            {
                ReceivedMessages = allMessagesVm.Where(x => x.ReceiverId == userId).ToList(),
                SentMessages = allMessagesVm.Where(x => x.SenderId == userId).ToList()
            };
            return model;
        }

        public void IsUserInRole()
        {
            
        }
    }
}
