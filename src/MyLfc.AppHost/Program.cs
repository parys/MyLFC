var builder = DistributedApplication.CreateBuilder(args);

var sqldb = builder.AddSqlServer("sql-server");

var cache = builder.AddRedis("cache");

builder.AddProject<Projects.MyLfc_Web_WebHost>("mylfc-web-webhost")
    .WithExternalHttpEndpoints()
    .WithReference(cache)
    .WithReference(sqldb);

builder.Build().Run();
