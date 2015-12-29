using System.Collections.Generic;

namespace MyLiverpoolSite.Data.DataAccessLayer
{
    public class PageableData<T> where T : class
    {
        protected int ItemPerPageDefault = 15;
        public IEnumerable<T> List { get; set; }
        public int PageNo { get; set; }
        public int CountPage { get; set; }
      //  public int ItemPerPage { get; set; }

        public PageableData(IEnumerable<T> list, int page, int countEntities = 1, int itemPerPage = 0)
        {
            if (itemPerPage == 0)
            {
                itemPerPage = ItemPerPageDefault;
            }
      //      ItemPerPage = itemPerPage;
            PageNo = page;
            CountPage = (int)decimal.Remainder(countEntities, itemPerPage) == 0 ? countEntities / itemPerPage : countEntities / itemPerPage + 1;
            List = list;
        }
    }
}
