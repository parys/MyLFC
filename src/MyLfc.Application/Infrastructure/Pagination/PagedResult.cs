using System;
using System.Collections.Generic;

namespace MyLfc.Application.Infrastructure.Pagination;

/// <summary>
/// Strongly typed class for results and result set properties.
/// </summary>
/// <typeparam name="T"></typeparam>
[Serializable]
public class PagedResult<T> : PagedResultBase where T : class
{
    public IList<T> Results { get; set; }

    public PagedResult()
    {
        Results = new List<T>();
    }
}
