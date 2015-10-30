namespace MyLiverpoolSite.Data.Entities
{
    public class ForumMessage
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public int ThemeId { get; set; }

        public virtual ForumTheme ForumTheme { get; set; }

        public long AdditionTimeUtc { get; set; }

        public bool IsFirstMessage { get; set; }

        public string Message { get; set; }

        public virtual User Author { get; set; }

        public string Ip { get; set; }

        public long LastModifiedTimeUtc { get; set; }


    }
}
