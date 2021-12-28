using System.ComponentModel.DataAnnotations;
using MyLfc.Data.Common;

namespace MyLfc.Domain
{
    public class Wish : IEntity
    {
        public int Id { get; set; }

        [MaxLength(30)]
        public string Title { get; set; }
        
        public string Message { get; set; }

        public WishType Type { get; set; }

        public WishStateEnum State { get; set; }
    }
}
