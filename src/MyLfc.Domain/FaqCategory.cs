using System.Collections.Generic;

namespace MyLfc.Domain
{
    public class FaqCategory
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool ForSiteTeam { get; set; }

        public byte Order { get; set; }

        public List<FaqItem> Items { get; set; }
    }
}
