using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class ForumSection
    {
        public ForumSection()
        {
            ForumSubsections = new HashSet<ForumSubsection>();
        }

        public int Id { get; set; }

        public int IdOld { get; set; }

        public string Name { get; set; }

        public virtual ICollection<ForumSubsection> ForumSubsections { get; set; }

    }
}
