using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using MyLfc.Application.Infrastructure.Pipelines;
using MyLfc.Application.Materials.Queries;

namespace MyLfc.Application.Infrastructure
{
    public static class Registration
    {
        public static void AddMediatR(this IServiceCollection services)
        {
            AssemblyScanner.FindValidatorsInAssembly(typeof(RequestValidationBehavior<,>).Assembly)
                .ForEach(result => services.AddScoped(result.InterfaceType, result.ValidatorType));

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));
            services.AddMediatR(typeof(GetLatestMaterialsQuery).Assembly);
        }
    }
}
