using System;

namespace MyLfc.Domain
{
    public class ForumMessage : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public int ThemeId { get; set; }

        public ForumTheme Theme { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        public bool IsFirstMessage { get; set; }

       //todo [AllowHtml]
        public string Message { get; set; }

        public User Author { get; set; }
        public int AuthorId { get; set; }

        //   public string Ip { get; set; }

        public DateTimeOffset LastModifiedTime { get; set; }
    }
}
