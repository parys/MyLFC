using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto
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
