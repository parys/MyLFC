namespace MyLfc.Business.Dto
{
    public class ImageDto : IDto
    {
        public string Path { get; set; }
        public string Name { get; set; }
        public bool IsFolder { get; set; }
    }
}
