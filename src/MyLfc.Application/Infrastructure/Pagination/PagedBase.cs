﻿using System;

namespace MyLfc.Application.Infrastructure.Pagination;

[Serializable]
public abstract class PagedBase
{
    /// <summary>
    /// Item count on page
    /// </summary>
    public int PageSize { get; set; } = 10;

    /// <summary>
    /// Current page number
    /// </summary>
    public int CurrentPage { get; set; } = 1;

    public int SkipCount() => (CurrentPage - 1) * PageSize;
}
