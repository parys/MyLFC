using System;

namespace MyLfc.Common.Utilities
{
    public class DateTimeHelpers
    {
        public static DateTime ConvertUtcToLocalTime(long additionTime)
        {
            DateTime dtDateTime = new(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            return dtDateTime.AddSeconds(additionTime).ToLocalTime();
        }
    }
}
