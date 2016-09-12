using MyLiverpool.Business.DTO;

namespace MyLiverpool.Business.DtoNext
{
    public class ImageDto : IDto
    {
        public string Path { get; set; }
        public string Name { get; set; }
        public bool IsFolder { get; set; }
    }
}
