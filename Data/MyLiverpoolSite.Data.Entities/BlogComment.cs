using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyLiverpoolSite.Data.Entities
{
    public class BlogComment : IEntity
    {
        public BlogComment()
        {
            this.Children = new HashSet<BlogComment>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

     //   public int MaterialId { get; set; }

        public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public virtual User Author { get; set; }

        public int AuthorId { get; set; }

        public string Message { get; set; }

        public string Answer { get; set; }

        public virtual ICollection<BlogComment> Children { get; set; }

        //  [ForeignKey("ParentId")]
        public virtual BlogComment Parent { get; set; }

        public int? ParentId { get; set; }

        public virtual BlogItem BlogItem { get; set; }

        public int BlogItemId { get; set; }
    }
}
