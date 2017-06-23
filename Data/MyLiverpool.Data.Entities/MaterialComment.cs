using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class MaterialComment : IEntity
    {
        public MaterialComment()
        {
            Children = new HashSet<MaterialComment>();
            CommentVotes = new HashSet<CommentVote>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

        public bool Pending { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public virtual User Author { get; set; }

        public int AuthorId { get; set; }
        
        public string Message { get; set; }
        
        public string Answer { get; set; }

        public virtual ICollection<MaterialComment> Children { get; set; }

        public virtual MaterialComment Parent { get; set; }

        public virtual ICollection<CommentVote> CommentVotes { get; set; }

        public int? ParentId { get; set; }

        public int? OldParentId { get; set; }

        public virtual Material Material { get; set; }

        public int MaterialId { get; set; }

        public MaterialType MaterialType { get; set; }

        public bool IsVerified { get; set; }

        [NotMapped]
        public int Number { get; set; }

        [NotMapped]//todo need more elegant solution
        public int? CurrentUserId { get; set; }
    }
}
