using System;
using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class Material : IEntity
    {
        public Material()
        {
            Comments = new HashSet<MaterialComment>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }
        
        public virtual MaterialCategory Category { get; set; }

        //public int Year { get; set; }

        //public int Month { get; set; }

        //public int Day { get; set; }

        public bool Pending { get; set; }

        public bool OnTop { get; set; }

        public bool CanCommentary { get; set; }

        public DateTime AdditionTime { get; set; }

   //     public int NumberCommentaries { get; set; }

        public virtual User Author { get; set; }

        public string Title { get; set; }

        //todo   [AllowHtml]
        public string Brief { get; set; }

        //todo [AllowHtml]
        public string Message { get; set; }

        public int Reads { get; set; }

        public string Source { get; set; }

        public float Rating { get; set; }

        public int RatingNumbers { get; set; }

        public int RatingSumm { get; set; }

        public string PhotoPath { get; set; }

        public DateTime LastModified { get; set; }

        public virtual ICollection<MaterialComment> Comments { get; set; } 

        public int CategoryId { get; set; }

        public int AuthorId { get; set; }

        public MaterialType Type { get; set; }
    }
}
