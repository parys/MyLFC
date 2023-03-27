using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using MyLfc.Application.Features.Admin.Commands;
using MyLfc.Application.Infrastructure.Pipelines;
using MyLfc.Application.Materials.Queries;

namespace MyLfc.Application.Infrastructure;

public static class DependencyInjection
{
    public static void AddMediatR(this IServiceCollection services)
    {
        AssemblyScanner.FindValidatorsInAssembly(typeof(RequestValidationBehavior<,>).Assembly)
            .ForEach(result => services.AddScoped(result.InterfaceType, result.ValidatorType));

        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));
        services.AddMediatR(config =>
        {
            config.RegisterServicesFromAssemblies(typeof(CalculateCommentsNumberCommand).Assembly); // TODO research whether it is required
        });
    }
}
