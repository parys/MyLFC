using System;
using System.Collections.Generic;
using MyLfc.Data.Common;

namespace MyLfc.Domain
{
    public class Material : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public bool Deleted { get; set; }

        public bool Pending { get; set; }

        public bool OnTop { get; set; }

        public bool CanCommentary { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        public string Title { get; set; }

        public string Brief { get; set; }

        public string Message { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

        public string PhotoPath { get; set; }

        public string PhotoPreview { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public int AuthorId { get; set; }
        public string UserName { get; set; }

        public MaterialType Type { get; set; }

        public bool UsePhotoInBody { get; set; }

        public string Tags { get; set; }

        public int CommentsCount { get; set; }

        public FullUser Author { get; set; }

        public MaterialCategory Category { get; set; }

        public ICollection<Comment> Comments { get; set; } = new HashSet<Comment>();
    }
}
