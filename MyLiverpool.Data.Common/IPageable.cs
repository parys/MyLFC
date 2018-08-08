namespace MyLiverpool.Data.Common
{
    public interface IPageable
    {
        int PageNo { get; set; }
        int TotalPages { get; set; }

        bool HasPreviousPage { get; }

        bool HasNextPage { get; }
    }
}
