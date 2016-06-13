
namespace MyLiverpool.Business.DTO
{
    public class RequestDto : IDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Message { get; set; }

        public string Type { get; set; }
    }
}
