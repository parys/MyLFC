using System;

namespace MyLiverpoolSite.Common.Utilities
{
    public class DateTimeHelpers
    {
        public static DateTime ConvertUtcToLocalTime(long additionTime)
        {
            DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            return dtDateTime.AddSeconds(additionTime).ToLocalTime();
        }
    }
}
