using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class ForumSection : IEntity
    {
        public ForumSection()
        {
            Subsections = new HashSet<ForumSubsection>();
        }

        public int Id { get; set; }

        public int IdOld { get; set; }

        public string Name { get; set; }

        public virtual ICollection<ForumSubsection> Subsections { get; set; }

    }
}
