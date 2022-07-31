using System.Collections.Generic;

namespace MyLfc.Domain;

public class ForumSection : IEntity
{
    public int Id { get; set; }

    public int IdOld { get; set; }

    public string Name { get; set; }

    public ICollection<ForumSubsection> Subsections { get; set; } = new HashSet<ForumSubsection>();

}
