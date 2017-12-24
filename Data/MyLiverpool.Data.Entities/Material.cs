using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class Material : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }
        
        public virtual MaterialCategory Category { get; set; }

        //public int Year { get; set; }

        //public int Month { get; set; }

        //public int Day { get; set; }

        public bool Pending { get; set; }

        public bool OnTop { get; set; }

        public bool CanCommentary { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        [NotMapped]
        public int CommentsCount { get; set; }

        public virtual User Author { get; set; }

        public string Title { get; set; }
        
        public string Brief { get; set; }
        
        public string Message { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

        public float Rating { get; set; }

        public int RatingNumbers { get; set; }

        public int RatingSumm { get; set; }

        public string PhotoPath { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public virtual ICollection<MaterialComment> Comments { get; set; } = new List<MaterialComment>();

        public int CategoryId { get; set; }

        public int AuthorId { get; set; }

        public MaterialType Type { get; set; }

        public bool UsePhotoInBody { get; set; }
    }
}
