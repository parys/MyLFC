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
        /// Current online guests.
        /// </summary>
        public static readonly ConcurrentBag<string> CurrentOnlineGuestsV2 = new ConcurrentBag<string>();

        /// <summary>
        /// Current online users.
        /// </summary>
        public static readonly ConcurrentDictionary<string, OnlineCounterModel> CurrentOnlineV2 = new ConcurrentDictionary<string, OnlineCounterModel>();
        
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static OnlineUsersDto GetStats()
        {
            var users = CurrentOnlineV2.Values
                .GroupBy(p => p.UserName)
                .Select(g => g.First());
            return new OnlineUsersDto
            {
                AllCount = users.Count() + CurrentOnlineGuestsV2.Count,
                GuestCount = CurrentOnlineGuestsV2.Count,
                Users = users
            };
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
        public IEnumerable<OnlineCounterModel> Users { get; set; } = new List<OnlineCounterModel>();
    }
}
