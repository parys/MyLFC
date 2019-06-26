using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto
{
    public class ForumThemeDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int SubsectionId { get; set; }

        public int AuthorId { get; set; }

        public string AuthorUserName { get; set; }

        public PageableData<ForumMessageDto> Messages { get;set; }

        public int Answers { get; set; }
    }
}
