using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MyLiverpool.Web.WebApiNext.BackgroundServices;
using Serilog;

namespace MyLiverpool.Web.WebApiNext
{
    /// <summary>
    /// Runs kestrel
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
                .Build();
            
            var host = Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config.AddConfiguration(builtConfig);
                })
                .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .ConfigureServices(services =>
                {
                    services.AddHostedService<CleanExpiredTokensService>();
                })
                .Build();

            host.Run();
        }
    }
}
