using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class HelpEntity : IEntity
    {
        public int Id { get; set; }

        public HelperEntityType Type { get; set; }

        public string Value { get; set; }
    }
}
