using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using OpenIddict.Core;
using OpenIddict.EntityFrameworkCore.Models;

namespace MyLiverpool.Web.WebApiNext.BackgroundServices
{
    /// <summary>
    /// Cleans up database expired tokens.
    /// </summary>
    public class CleanExpiredTokensService : IHostedService, IDisposable
    {
        private readonly ILogger<CleanExpiredTokensService> _logger;
        private readonly IServiceProvider _service;
        private Timer _timer;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="service"></param>
        public CleanExpiredTokensService(ILogger<CleanExpiredTokensService> logger,
            IServiceProvider service)
        {
            _logger = logger;
            _service = service;
        }

        /// <summary>
        /// Starts timer.
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(RemoveExpiredTokensAsync, null, TimeSpan.Zero,
                TimeSpan.FromHours(12));
            return Task.CompletedTask;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }

        /// <summary>
        /// Disposes timer.
        /// </summary>
        public void Dispose()
        {
            _timer?.Dispose();
        }

        private async void RemoveExpiredTokensAsync(object param)
        {
            using (var scope = _service.CreateScope())
            {
                var calStatRepo = scope.ServiceProvider.GetRequiredService<OpenIddictTokenManager<OpenIddictEntityFrameworkCoreToken<int>>>();
                await calStatRepo.PruneAsync(DateTimeOffset.Now.AddDays(-1));
            }
        }
    }
}
