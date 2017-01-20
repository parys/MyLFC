using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class MaterialCategory : IEntity
    {
        public MaterialCategory()
        {
            Materials = new HashSet<Material>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual ICollection<Material> Materials { get; set; }

        public MaterialType MaterialType { get; set; }

        [NotMapped]
        public int ItemsCount { get; set; }
    }
}
