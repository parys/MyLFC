using System;
using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class MaterialComment : IEntity
    {
        public MaterialComment()
        {
            Children = new HashSet<MaterialComment>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

        public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public DateTime LastModified { get; set; }

        public virtual User Author { get; set; }

        public int AuthorId { get; set; }

        //todo [AllowHtml]
        public string Message { get; set; }

        //todo   [AllowHtml]
        public string Answer { get; set; }

        public virtual ICollection<MaterialComment> Children { get; set; }

        public virtual MaterialComment Parent { get; set; }

        public int? ParentId { get; set; }

        public virtual Material Material { get; set; }

        public int MaterialId { get; set; }

        public MaterialType MaterialType { get; set; }

        public bool IsVerified { get; set; }
    }
}
