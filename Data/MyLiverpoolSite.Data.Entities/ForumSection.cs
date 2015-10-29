using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class ForumSection
    {
        public long Id { get; set; }

        public long IdOld { get; set; }

        public string Name { get; set; }

        public List<ForumSubsection> ForumSubsections { get; set; }

    }
}
