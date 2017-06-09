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
        private static ConcurrentDictionary<string, DateTimeOffset> _currentOnlineGuests = new ConcurrentDictionary<string, DateTimeOffset>();
        private static ConcurrentDictionary<string, DateTimeOffset> _currentOnlineGuests2;
        private static ConcurrentDictionary<int, OnlineCounterModel> _currentOnline = new ConcurrentDictionary<int, OnlineCounterModel>();
        private static ConcurrentDictionary<int, OnlineCounterModel> _currentOnline2;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        public static void AddUserToOnline(OnlineCounterModel model)
        {
            OnlineCounterModel oldValue;
            if (_currentOnline.TryGetValue(model.Id, out oldValue))
            {
                _currentOnline.TryUpdate(model.Id, model, oldValue);
            }
            else
            {
                _currentOnline.TryAdd(model.Id, model);
            }
            RemoveOld();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="key"></param>
        public static void AddGuestToOnline(string key)
        {
            DateTimeOffset oldValue;
            if (_currentOnlineGuests.TryGetValue(key, out oldValue))
            {
                _currentOnlineGuests.TryUpdate(key, DateTimeOffset.Now, oldValue);
            }
            else
            {
                _currentOnlineGuests.TryAdd(key, DateTimeOffset.Now);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static OnlineUsersDto GetStats()
        {
            return new OnlineUsersDto
            {
                AllCount = _currentOnline.Count + _currentOnlineGuests.Count,
                GuestCount = _currentOnlineGuests.Count,
                Users = _currentOnline.Values
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
            _currentOnlineGuests2 = new ConcurrentDictionary<string, DateTimeOffset>();
            foreach (var keyValue in _currentOnlineGuests)
            {
                if (keyValue.Value.AddSeconds(40) > DateTimeOffset.Now)
                {
                    _currentOnlineGuests2.TryAdd(keyValue.Key, keyValue.Value);
                }
            }
            _currentOnlineGuests = _currentOnlineGuests2;

            _isRemovingGuests = false;
        }

        private static void RemoveOldUsersRecords()
        {
            _currentOnline2 = new ConcurrentDictionary<int, OnlineCounterModel>();
            _isRemoving = true;
            foreach (var keyValue in _currentOnline)
            {
                if (keyValue.Value.Date.AddSeconds(40) > DateTimeOffset.Now)
                {
                    _currentOnline2.TryAdd(keyValue.Key, keyValue.Value);
                }
            }
            _currentOnline = _currentOnline2;

            _isRemoving = false;
        }
    }

    /// <summary>
    /// 
    /// </summary>
    public class OnlineCounterModel
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public DateTimeOffset Date { get; set; }
    }

    /// <summary>
    /// 
    /// </summary>
    public class OnlineUsersDto
    {
        public int AllCount { get; set; }

        public int GuestCount { get; set; }

        public ICollection<OnlineCounterModel> Users { get; set; }
    }
}
