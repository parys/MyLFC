namespace MyLfc.Application.Infrastructure.Pagination;

public abstract class PagedQueryBase : PagedBase
{

    /// <summary>
    /// Contains field name for sorting
    /// </summary>
    public string SortOn { get; set; }

    /// <summary>
    /// Contains sort direction such as asc, desc
    /// </summary>
    public string SortDirection { get; set; }
}
