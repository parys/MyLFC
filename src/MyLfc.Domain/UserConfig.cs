namespace MyLfc.Domain;

public class UserConfig
{
    public int UserId { get; set; }

    public bool IsReplyToPmEnabled { get; set; }

    public bool IsReplyToEmailEnabled { get; set; }

    public bool IsPmToEmailNotifyEnabled { get; set; }

    public FullUser User { get; set; }
}
