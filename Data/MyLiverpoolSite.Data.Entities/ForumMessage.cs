namespace MyLiverpoolSite.Data.Entities
{
    public class ForumMessage
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public int ThemeId { get; set; }

        public ForumTheme ForumTheme { get; set; }

        public long AdditionTimeUTC { get; set; }

        public bool IsFirstMessage { get; set; }

        public string Message { get; set; }

        public User Author { get; set; }

        public string Ip { get; set; }

        public long LastModifiedTimeUTC { get; set; }


    }
}
