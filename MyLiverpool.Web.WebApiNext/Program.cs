using Microsoft.AspNetCore;
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
        //public static void Main(string[] args)
        //{
        //    var host = new WebHostBuilder()
        //        .CaptureStartupErrors(true)
        //        .UseKestrel(options =>
        //        {
        //        })
        //        .UseContentRoot(Directory.GetCurrentDirectory())
        //        .UseIISIntegration()
        //        .UseStartup<Startup>()
        //        .Build();
        //    host.Run();
        //}

        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
