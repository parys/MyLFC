using System;

namespace MyLiverpoolSite.Data.Entities
{
    public class ForumMessage : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public int ThemeId { get; set; }

        public virtual ForumTheme ForumTheme { get; set; }

        public DateTime AdditionTime { get; set; }

        public bool IsFirstMessage { get; set; }

        public string Message { get; set; }

        public virtual User Author { get; set; }
        public int AuthorId { get; set; }

        public string Ip { get; set; }

        public DateTime LastModifiedTime { get; set; }


    }
}
