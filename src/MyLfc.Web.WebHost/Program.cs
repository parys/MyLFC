
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Configuration;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Materials;
using MyLfc.Business.Services.Helpers;
using MyLfc.Common.Mappings;
using MyLfc.Common.Utilities;
using MyLfc.Common.Web;
using MyLfc.Common.Web.Hubs;
using MyLfc.Common.Web.Middlewares;
using MyLfc.Persistence;
using MyLfc.Web.WebHost.BackgroundServices;
using MyLfc.Web.WebHost.Filters;
using MyLfc.Web.WebHost.Middlewares;
using Newtonsoft.Json.Serialization;
using Serilog;
using System.Globalization;
using System.IO.Compression;
using System.Reflection;


var builder = WebApplication.CreateBuilder(args);

builder.Configuration.SetBasePath(builder.Environment.ContentRootPath)
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true)
    .AddJsonFile($"appsettings.local.json", optional: true)
    .AddJsonFile($"config/appsettings.prod.json", optional: true);

// TODO whether it needs
builder.Host.UseSerilog();

builder.Configuration.AddEnvironmentVariables();
Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(builder.Configuration)
    .CreateLogger();


// Add service defaults & Aspire components.
builder.AddServiceDefaults();
if (builder.Configuration.GetSection("Settings") != null &&
          Convert.ToBoolean(builder.Configuration.GetSection("Settings")["Compression"]))
{
    builder.Services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
    builder.Services.AddCustomResponseCompression();
}

builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    options.DefaultRequestCulture = new RequestCulture("ru-RU");
    options.SupportedCultures = new List<CultureInfo> { new CultureInfo("ru-RU") };
    options.RequestCultureProviders = new List<IRequestCultureProvider>();
});
builder.Services.AddRouting(options => options.LowercaseUrls = true);
builder.Services.AddControllersWithViews(options =>
{
    options.Filters.Add(typeof(RequestDecorator));
    options.Filters.Add(typeof(CustomExceptionFilterAttribute));
})

    .AddNewtonsoftJson(options =>
        options.SerializerSettings.ContractResolver =
            new CamelCasePropertyNamesContractResolver());

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", builder =>
    {
        builder
            .AllowCredentials()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("localhost:1669", "localhost:4500", "test.mylfc.ru", "mylfc.ru")
            .SetIsOriginAllowed(_ => true)
            .Build();
    });
});

builder.Services.AddPersistence(builder.Configuration, builder.Environment.IsDevelopment());

builder.Services.AddDataProtection().SetApplicationName("liverpoolfc-app")
    .PersistKeysToFileSystem(new DirectoryInfo(Directory.GetCurrentDirectory()));

builder.Services.AddCustomIdentitySettings();


builder.Services.ApplyCustomOpenIdDict(builder.Environment, builder.Configuration);

builder.Services.AddSignalR();

RegisterCoreHelpers(builder.Services);
builder.Services.RegisterServices();

builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.AddCustomRedisCache(builder.Configuration);

builder.Services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddSwaggerGen(options =>
    {
        //options.SwaggerDoc("v1", new OpenApiInfo()
        //{
        //    Version = "v1",
        //    Title = "MyLFC API",
        //    Description = "MyLFC API",
        //    //  TermsOfService = "None"
        //});


        var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
        options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));

        options.CustomOperationIds(e =>
            $"{e.ActionDescriptor.RouteValues["controller"]}.{e.ActionDescriptor.RouteValues["action"]}");
        options.CustomSchemaIds(DefaultSchemaIdSelector);

        //    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
        //    {
        //        //Type = SecuritySchemeType.OAuth2,
        //        //Flows = new OpenApiOAuthFlows
        //        //{
        //        //    Implicit = new OpenApiOAuthFlow()
        //        //    {

        //        //    }
        //        //}"implicit",
        //        //AuthorizationUrl = "/connect/authorize",
        //        ////   Extensions = { {"123", new object()}},
        //        //TokenUrl = "connect/token",
        //        //Scopes = new Dictionary<string, string>
        //        //{
        //        //    {"roles", "roles scope"},
        //        //    {"openid", "openid scope"}
        //        //},
        //    });

        //    //   options.OperationFilter<AssignSecurityRequirements>();
    });
}
builder.Services.AddAutoMapper(typeof(MaterialProfile), typeof(ForumMessageMapperProfile));
builder.Services.AddMediatR();

builder.Services.AddScoped<RequestContext>();

builder.Services.AddHostedService<CleanExpiredTokensService>();

var app = builder.Build();

// ----------------------------------------- SETUP MIDDLEWARES -----------------------------------------------------
if (builder.Configuration["EnableResponseTimeMeasure"] != null && builder.Configuration.GetValue<bool>("EnableResponseTimeMeasure"))
{
    app.UseMiddleware<ResponseTimeMeasureMiddleware>();
}

// app.UseXsrf();
if (builder.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
        c.RoutePrefix = string.Empty;
        // c.ConfigureOAuth2("test-client-id123", "test-client-secr43et", "test-rea32lm", "test-a11pp");
    });
    var options = new RewriteOptions()
        .AddRewrite("^/small([0-9]+)(.*)", "$1", true);

    app.UseRewriter(options);
}
else
{
    app.UseForwardedHeaders(new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
    });
    if (builder.Configuration.GetSection("Settings") != null &&
        Convert.ToBoolean(builder.Configuration.GetSection("Settings")["Compression"]))
    {
        app.UseResponseCompression();
    }
}

app.UseDefaultFiles();

var cachePeriod = builder.Environment.IsDevelopment() ? "600" : "6048000";
app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = ctx =>
    {
        ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
    }
});


app.UseRouting();
app.UseCors("MyPolicy");

app.UseAuthentication();
app.UseAuthorization();

// TODO investigate
app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<AnonymHub>("/hubs/anonym");
    endpoints.MapHub<AuthHub>("/hubs/auth");
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");
});

//if (!app.Environment.IsDevelopment())
//{
//    app.UseExceptionHandler("/Error", createScopeForErrors: true);
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//    app.UseHsts();
//}

//app.UseHttpsRedirection();

//app.UseStaticFiles();
//app.UseAntiforgery();

//app.UseOutputCache();

//app.MapRazorComponents<App>()
//    .AddInteractiveServerRenderMode();

//app.MapDefaultEndpoints();

app.Run();



#region help methods
void RegisterCoreHelpers(IServiceCollection services)
{
    // TODO verify, probably add default cover it
    //services.AddSingleton<IWebHostEnvironment>(Env);
    //services.AddSingleton<IConfigurationRoot>(Configuration);
    services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();
    services.AddTransient<ISignalRHubAggregator, SignalRHubAggregator>();
}


static string DefaultSchemaIdSelector(Type modelType)
{
    var items = modelType.FullName.Split(".");
    return items.Last().Replace("+", ".");
}
#endregion