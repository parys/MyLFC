using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

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
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("hosting.json", true)
                .Build();


            var host = WebHost.CreateDefaultBuilder(args)
                //#if !DEBUG
                //                .UseApplicationInsights()
                //#endif
                .UseConfiguration(config)
                //.CaptureStartupErrors(true)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
