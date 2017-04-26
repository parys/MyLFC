using System;

namespace MyLiverpool.Data.Entities
{
    public class ForumMessage : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public int ThemeId { get; set; }

        public virtual ForumTheme Theme { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        public bool IsFirstMessage { get; set; }

       //todo [AllowHtml]
        public string Message { get; set; }

        public virtual User Author { get; set; }
        public int AuthorId { get; set; }

        //   public string Ip { get; set; }

        public DateTimeOffset LastModifiedTime { get; set; }
    }
}
