using System.ComponentModel.DataAnnotations;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Business.DTO
{
    public class WishDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public int Type { get; set; }

        public string TypeName { get; set; }
    }
}
