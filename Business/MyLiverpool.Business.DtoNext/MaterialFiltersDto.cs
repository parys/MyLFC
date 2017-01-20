using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.DtoNext
{
    public class MaterialFiltersDto
    {
        public int Page { get; set; } = 1;

        public int? CategoryId { get; set; }

        public string UserName { get; set; }

     //   [JsonConverter(typeof(StringEnumConverter))]
        public MaterialType MaterialType { get; set; }
    }
}