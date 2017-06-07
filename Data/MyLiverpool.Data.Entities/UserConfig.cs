namespace MyLiverpool.Data.Entities
{
    public class UserConfig
    {
        public int UserId { get; set; }

        public bool IsReplyToPmEnabled { get; set; }

        public bool IsReplyToEmailEnabled { get; set; }

        public bool IsPmToEmailNotifyEnabled { get; set; }

        public virtual User User { get; set; }
    }
}
