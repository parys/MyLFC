namespace MyLiverpool.Business.DTO
{
    public class ForumMessageDto : IDto
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public string AuthorUserName { get; set; }
        public string Message { get; set; }
    }
}
