using MyLiverpool.Data.Common;

namespace MyLiverpool.Common.Utilities
{
    public static class EnumExtensions
    {
        public static string GetRussianName(this WishType type) //todo remove
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
