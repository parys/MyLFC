using System;

namespace MyLfc.Domain;

public class FaqItem
{
    public int Id { get; set; }

    public string Question { get; set; }

    public string Answer { get; set; }
    
    public byte Order { get; set; }

    public DateTimeOffset LastUpdated { get; set; }

    public int FaqCategoryId { get; set; }

    public FaqCategory FaqCategory { get; set; }
}
