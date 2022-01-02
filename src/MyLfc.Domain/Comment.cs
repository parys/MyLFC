using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MyLfc.Domain.Polls;
using MyLfc.Data.Common;

namespace MyLfc.Domain
{
    public class Comment : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }
        
        public DateTimeOffset AdditionTime { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public User Author { get; set; }

        public int AuthorId { get; set; }

        [MaxLength(40000)]
        public string Message { get; set; }

        [MaxLength(5000)]
        public string Answer { get; set; }

        public ICollection<Comment> Children { get; set; } = new HashSet<Comment>();

        public ICollection<CommentVote> CommentVotes { get; set; } = new HashSet<CommentVote>();
        
        public int? ParentId { get; set; }

        public Comment Parent { get; set; }

        public int? OldParentId { get; set; }

        public Material Material { get; set; }

        public int? MaterialId { get; set; }

        public Match Match { get; set; }

        public int? MatchId { get; set; }

        public Poll Poll { get; set; }

        public int? PollId { get; set; }

        public CommentType Type { get; set; }

        public bool IsVerified { get; set; }

        public bool Deleted { get; set; }

        public int PositiveCount { get; set; }

        public int NegativeCount { get; set; }

        [NotMapped]
        public int Number { get; set; }

        [NotMapped]//todo need more elegant solution
        public int? CurrentUserId { get; set; }
    }
}
