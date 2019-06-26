using System;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto
{
    public class NotificationDto : IDto
    {
        public int Id { get; set; }
        
        public NotificationType Type { get; set; }

        public string TypeName { get; set; }

        public int? EntityId { get; set; }

        public int UserId { get; set; }

        public int CommentId { get; set; }

        public string Text { get; set; }

        public bool IsRead { get; set; }

        public DateTimeOffset DateTime { get; set; }
    }
}
