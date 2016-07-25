using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Common.Utilities
{
    public static class EnumExtensions
    {
        public static string GetRussianName(this WishType type)
        {
            switch (type)
            {
                case WishType.Bug:
                    return "Баг";
                case WishType.BugUi:
                    return "Баг оформления";
                case WishType.Feature:
                    return "Пожелание";
                case WishType.FeatureUi:
                    return "Пожелание оформления";
            }
            return string.Empty;
        }
    }
}
