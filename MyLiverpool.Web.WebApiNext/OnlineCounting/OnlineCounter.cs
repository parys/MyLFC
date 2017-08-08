using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

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

        private const int CounterTime = 140;
        private static DateTimeOffset _lastRemovingTime = DateTimeOffset.Now;
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
            if (_lastRemovingTime.AddSeconds(CounterTime) < DateTimeOffset.Now)
            {
                if (!_isRemoving)
                {
                    RemoveOldUsersRecords();
                }
                if (!_isRemovingGuests)
                {
                    RemoveOldGuestsRecords();
                }
                _lastRemovingTime = DateTimeOffset.Now;
            }
        }
        
        private static void RemoveOldGuestsRecords()
        {
            _isRemovingGuests = true;
            //foreach (var keyValue in CurrentOnlineGuests)
                for (var i = 0; i < CurrentOnlineGuests.Count; i++)
            {
              //  if (keyValue.Value.AddSeconds(CounterTime) < DateTimeOffset.Now)
                    if (CurrentOnlineGuests.Values.ElementAt(i).AddSeconds(CounterTime) < DateTimeOffset.Now)
                {
                    DateTimeOffset oldValue;
                    CurrentOnlineGuests.TryRemove(CurrentOnlineGuests.Keys.ElementAt(i), out oldValue);
                    //CurrentOnlineGuests.TryRemove(keyValue.Key, out oldValue);
                }
            }
            _isRemovingGuests = false;
        }

        private static void RemoveOldUsersRecords()
        {
            _isRemoving = true;
            for (var i = 0; i < CurrentOnline.Count; i++)
             //   foreach (var keyValue in CurrentOnline)
            {
          //      if (keyValue.Value.Date.AddSeconds(CounterTime) < DateTimeOffset.Now)
                if (CurrentOnline.Values.ElementAt(i).Date.AddSeconds(CounterTime) < DateTimeOffset.Now)
                {
                    OnlineCounterModel oldValue;
               //     CurrentOnline.TryRemove(keyValue.Key, out oldValue);
                    CurrentOnline.TryRemove(CurrentOnline.Keys.ElementAt(i), out oldValue);
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
