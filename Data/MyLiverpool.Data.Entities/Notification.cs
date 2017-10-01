using System;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class Notification : IEntity
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public NotificationType Type { get; set; }

        public int EntityId { get; set; }

        public string Text { get; set; }

        public bool IsRead { get; set; }

        public DateTimeOffset DateTime { get; set; }
    }
}
