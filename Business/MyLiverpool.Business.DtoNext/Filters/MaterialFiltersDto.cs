using System;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Dto.Filters
{
    [Obsolete("Remove after 1 Jul 19")]
    public class MaterialFiltersDto: BaseFiltersDto
    {
        public int? CategoryId { get; set; }

        public string UserName { get; set; }

        public int? UserId { get; set; }

        public bool IsInNewsmakerRole { get; set; }

        public MaterialType MaterialType { get; set; }

        public override string ToString()
        {
            return $"{Page}{CategoryId}{UserName}{UserId}{IsInNewsmakerRole}{MaterialType}";
        }
    }
}