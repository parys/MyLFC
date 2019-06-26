using System.IO;

namespace MyLiverpool.Business.Services
{
    public static class FileHelper
    {
        public static bool Delete(string path)
        {
            if (File.Exists(path))
            {
                System.GC.Collect();
                System.GC.WaitForPendingFinalizers();
                File.Delete(path);
            }
            return true;
        }
    }
}
