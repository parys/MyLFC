using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto
{
    public class CommentVoteDto : IDto
    {
        [Required]
        public int CommentId { get; set; }

        [Required]
        public bool Positive { get; set; }

        public int UserId { get; set; }
    }
}
