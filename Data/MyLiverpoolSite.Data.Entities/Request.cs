using System.ComponentModel.DataAnnotations;

namespace MyLiverpoolSite.Data.Entities
{
    public class Request : IEntity
    {
        public int Id { get; set; }

        [MaxLength(30)]
        public string Title { get; set; }

        [MaxLength(300)]
        public string Message { get; set; }

        public RequestType Type { get; set; }
    }
}
