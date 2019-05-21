using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.Entities.Polls;

namespace MyLfc.Domain
{
    public class MaterialComment : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public bool Pending { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public virtual User Author { get; set; }

        public int AuthorId { get; set; }

        [MaxLength(40000)]
        public string Message { get; set; }

        [MaxLength(5000)]
        public string Answer { get; set; }

        public virtual ICollection<MaterialComment> Children { get; set; } = new HashSet<MaterialComment>();

        public virtual ICollection<CommentVote> CommentVotes { get; set; } = new HashSet<CommentVote>();
        
        public int? ParentId { get; set; }

        public virtual MaterialComment Parent { get; set; }

        public int? OldParentId { get; set; }

        public virtual Material Material { get; set; }

        public int? MaterialId { get; set; }

        public virtual Match Match { get; set; }

        public int? MatchId { get; set; }

        public virtual Poll Poll { get; set; }

        public int? PollId { get; set; }

        public CommentType Type { get; set; }

        public bool IsVerified { get; set; }

        [NotMapped]
        public int Number { get; set; }

        [NotMapped]//todo need more elegant solution
        public int? CurrentUserId { get; set; }
    }
}
