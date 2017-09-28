using System;
using System.Collections.Generic;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto
{
    public class MaterialCommentDto : IDto
    {
        public MaterialCommentDto()
        {
            Children = new HashSet<MaterialCommentDto>();
        }

        public int Id { get; set; }

        public int Number { get; set; }

        public DateTimeOffset AdditionTime { get; set; }
        public DateTimeOffset LastModified { get; set; }

        public string AuthorUserName { get; set; }

        public int AuthorId { get; set; }

        public string Photo { get; set; }

        public string Message { get; set; }
        
        public string Answer { get; set; }

        public int? MaterialId { get; set; }

        public int? MatchId { get; set; }

        public int? ParentId { get; set; }

        public virtual ICollection<MaterialCommentDto> Children { get; set; }

        public bool IsVerified { get; set; }

        public bool CanPositiveVote { get; set; }

        public bool CanNegativeVote { get; set; }

        public int PositiveCount { get; set; }

        public int NegativeCount { get; set; }

        public CommentType Type { get; set; }

        public string TypeName { get; set; }
    }
}
