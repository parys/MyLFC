using System.ComponentModel.DataAnnotations;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class Wish : IEntity
    {
        public int Id { get; set; }

        [MaxLength(30)]
        public string Title { get; set; }

        [MaxLength(300)]
        public string Message { get; set; }

        public WishType Type { get; set; }
    }
}
