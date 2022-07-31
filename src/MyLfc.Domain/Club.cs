using System.Collections.Generic;

namespace MyLfc.Domain;

public class Club : IEntity
{

    public int Id { get; set; }

    public string Name { get; set; }

    public string EnglishName { get; set; }

    public string StadiumName { get; set; }

    public int StadiumId { get; set; }

    public Stadium Stadium { get; set; }

    public string Logo { get; set; }

    public ICollection<Match> Matches { get; set; } = new HashSet<Match>();

    public ICollection<Transfer> Transfers { get; set; } = new HashSet<Transfer>();

    public ICollection<Loan> Loans { get; set; } = new HashSet<Loan>();
}