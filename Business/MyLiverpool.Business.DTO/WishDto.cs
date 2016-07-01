using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Business.DTO
{
    public class WishDto : IDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Message { get; set; }

        public int Type { get; set; }

        public string TypeName { get; set; }
    }
}
