using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
namespace MyLiverpool.Web.WebApiNext.OnlineCounting
{
    /// <summary>
    /// 
    /// </summary>
    public static class OnlineCounter
    {
        /// <summary>
        /// 
        /// </summary>
        private static readonly ConcurrentDictionary<string, DateTimeOffset> CurrentOnlineGuests = new ConcurrentDictionary<string, DateTimeOffset>();
        private static readonly ConcurrentDictionary<int, OnlineCounterModel> CurrentOnline = new ConcurrentDictionary<int, OnlineCounterModel>();
    
        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        public static void AddUserToOnline(OnlineCounterModel model)
        {
            CurrentOnline.AddOrUpdate(model.Id, model, (key, value) => model);
            RemoveOld();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="key"></param>
        public static void AddGuestToOnline(string key)
        {
            CurrentOnlineGuests.AddOrUpdate(key, DateTimeOffset.Now, (k, value) => DateTimeOffset.Now);
            RemoveOld();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static OnlineUsersDto GetStats()
        {
            return new OnlineUsersDto
            {
                AllCount = CurrentOnline.Count + CurrentOnlineGuests.Count,
                GuestCount = CurrentOnlineGuests.Count,
                Users = CurrentOnline.Values
            };
        }

        private static bool _isRemovingGuests;
        private static bool _isRemoving;
        private static void RemoveOld()
        {
            if (!_isRemoving)
            {
                RemoveOldUsersRecords();
            }
            if (!_isRemovingGuests)
            {
                RemoveOldGuestsRecords();
            }
        }
        
        private static void RemoveOldGuestsRecords()
        {
            _isRemovingGuests = true;
            foreach (var keyValue in CurrentOnlineGuests)
            {
                if (keyValue.Value.AddSeconds(40) < DateTimeOffset.Now)
                {
                    DateTimeOffset oldValue;
                    CurrentOnlineGuests.TryRemove(keyValue.Key, out oldValue);
                }
            }
            _isRemovingGuests = false;
        }

        private static void RemoveOldUsersRecords()
        {
            _isRemoving = true;
            foreach (var keyValue in CurrentOnline)
            {
                if (keyValue.Value.Date.AddSeconds(40) < DateTimeOffset.Now)
                {
                    OnlineCounterModel oldValue;
                    CurrentOnline.TryRemove(keyValue.Key, out oldValue);
                }
            }
            _isRemoving = false;
        }
    }

    /// <summary>
    /// Contains signed user.
    /// </summary>
    public class OnlineCounterModel
    {
        /// <summary>
        /// The identifier of user.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// UserName.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Last
        /// </summary>
        public DateTimeOffset Date { get; set; }
    }

    /// <summary>
    /// Contains guests count and list of users.
    /// </summary>
    public class OnlineUsersDto
    {
        /// <summary>
        /// Sum users and guests count.
        /// </summary>
        public int AllCount { get; set; }

        /// <summary>
        /// Guests count.
        /// </summary>
        public int GuestCount { get; set; }

        /// <summary>
        /// List of signed users.
        /// </summary>
        public ICollection<OnlineCounterModel> Users { get; set; }
    }
}
