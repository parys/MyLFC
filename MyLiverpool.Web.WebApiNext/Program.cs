using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace MyLiverpool.Web.WebApiNext
{
    /// <summary>
    /// Runs kestrel.
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Main method.
        /// </summary>
        /// <param name="args">Console arguments.</param>
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .CaptureStartupErrors(true)
                .UseKestrel(options =>
                {
                    options.ShutdownTimeout
                })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();
            host.Run();
        }
    }
}
