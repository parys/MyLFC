namespace MyLfc.Business.Dto.Forums;

public class ForumSubsectionMiniDto : IDto
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public int ThemesCount { get; set; }
}
