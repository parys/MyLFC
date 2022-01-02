using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using MyLfc.Data.Common;

namespace MyLfc.Domain
{
    public class MaterialCategory : IEntity
    {
        public int Id { get; set; }

        public int OldId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public ICollection<Material> Materials { get; set; } = new HashSet<Material>();

        public MaterialType MaterialType { get; set; }
    }
}
