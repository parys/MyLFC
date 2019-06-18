using System.Collections.Generic;

namespace MyLfc.Domain
{
    public class ForumSection : IEntity
    {
        public ForumSection()
        { 
        }

        public ForumSection(string name)
        {
            Name = name;
        }

        public int Id { get; set; }

        public int IdOld { get; set; }

        public string Name { get; set; }

        public virtual ICollection<ForumSubsection> Subsections { get; set; } = new HashSet<ForumSubsection>();

    }
}
