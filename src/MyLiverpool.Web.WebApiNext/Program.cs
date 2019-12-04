using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Serilog;

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
            var builtConfig = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("hosting.json", true)
                .Build();

            Log.Logger = new LoggerConfiguration()
                .WriteTo.Console()
                .MinimumLevel.Warning()
                .CreateLogger();

            var host = Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config.AddConfiguration(builtConfig);
                })
                .ConfigureLogging(logging =>
                {
                    logging.AddSerilog();
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .Build();

            host.Run();
        }
    }
}
