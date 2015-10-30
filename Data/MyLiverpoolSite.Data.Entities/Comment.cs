using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class Comment
    {
        public Comment()
        {
            Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

        public int MaterialId { get; set; }

        public bool Pending { get; set; }

        public long AdditionTime { get; set; }

        public virtual User Author { get; set; }

        public string Message { get; set; }

        public string Answer { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public int ParentCommentId { get; set; }

        public CommentType Type { get; set; }
    }
}
