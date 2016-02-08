using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class MaterialCategory : IEntity
    {
        public MaterialCategory()
        {
            Materials = new HashSet<Material>();
        }

        public int Id { get; set; }

        public int OldId { get; set; }

   //     public int Position { get; set; }

        public int ItemsCount { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UrlPath { get; set; }

        public virtual ICollection<Material> Materials { get; set; }

        public MaterialType MaterialType { get; set; }
    }
}
