using System.Collections.Generic;

namespace MyLfc.Domain;

public class Stadium : IEntity
{
    public int Id { get; set; }
    
    public string Name { get; set; }

    public string City { get; set; }

    public ICollection<Club> Clubs { get; set; } = new HashSet<Club>();

    public ICollection<Match> Matches { get; set; } = new HashSet<Match>();
}
