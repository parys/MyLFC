#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/MyLfc.Web.WebHost/MyLfc.Web.WebHost.csproj", "src/MyLfc.Web.WebHost/"]
COPY ["src/MyLfc.Application/MyLfc.Application.csproj", "src/MyLfc.Application/"]
COPY ["src/MyLfc.Common.Web/MyLfc.Common.Web.csproj", "src/MyLfc.Common.Web/"]
COPY ["src/MyLfc.Domain/MyLfc.Domain.csproj", "src/MyLfc.Domain/"]
COPY ["src/MyLfc.Data.Common/MyLfc.Data.Common.csproj", "src/MyLfc.Data.Common/"]
COPY ["src/MyLfc.Business.Contracts/MyLfc.Business.Contracts.csproj", "src/MyLfc.Business.Contracts/"]
COPY ["src/MyLfc.Business.DtoNext/MyLfc.Business.Dto.csproj", "src/MyLfc.Business.DtoNext/"]
COPY ["src/MyLfc.Common.Utilities/MyLfc.Common.Utilities.csproj", "src/MyLfc.Common.Utilities/"]
COPY ["src/MyLfc.Persistence/MyLfc.Persistence.csproj", "src/MyLfc.Persistence/"]
COPY ["src/MyLfc.Business.Services/MyLfc.Business.Services.csproj", "src/MyLfc.Business.Services/"]
COPY ["src/MyLfc.Common.Mappings/MyLfc.Common.Mappings.csproj", "src/MyLfc.Common.Mappings/"]
RUN dotnet restore "src/MyLfc.Web.WebHost/MyLfc.Web.WebHost.csproj"
COPY . .
WORKDIR "/src/src/MyLfc.Web.WebHost"
RUN dotnet build "MyLfc.Web.WebHost.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyLfc.Web.WebHost.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyLfc.Web.WebHost.dll"]