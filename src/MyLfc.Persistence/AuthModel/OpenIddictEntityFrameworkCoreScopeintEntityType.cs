﻿// <auto-generated />
using System;
using System.Reflection;
using Microsoft.EntityFrameworkCore.Metadata;
using OpenIddict.EntityFrameworkCore.Models;

#pragma warning disable 219, 612, 618
#nullable disable

namespace MyLfc.Persistence.AuthModel
{
    internal partial class OpenIddictEntityFrameworkCoreScopeintEntityType
    {
        public static RuntimeEntityType Create(RuntimeModel model, RuntimeEntityType baseEntityType = null)
        {
            var runtimeEntityType = model.AddEntityType(
                "OpenIddict.EntityFrameworkCore.Models.OpenIddictEntityFrameworkCoreScope<int>",
                typeof(OpenIddictEntityFrameworkCoreScope<int>),
                baseEntityType);

            var id = runtimeEntityType.AddProperty(
                "Id",
                typeof(int),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("Id", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<Id>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                valueGenerated: ValueGenerated.OnAdd,
                afterSaveBehavior: PropertySaveBehavior.Throw);
            id.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            var concurrencyToken = runtimeEntityType.AddProperty(
                "ConcurrencyToken",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("ConcurrencyToken", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<ConcurrencyToken>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true,
                concurrencyToken: true,
                maxLength: 50);
            concurrencyToken.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var description = runtimeEntityType.AddProperty(
                "Description",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("Description", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<Description>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true);
            description.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var descriptions = runtimeEntityType.AddProperty(
                "Descriptions",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("Descriptions", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<Descriptions>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true);
            descriptions.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var displayName = runtimeEntityType.AddProperty(
                "DisplayName",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("DisplayName", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<DisplayName>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true);
            displayName.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var displayNames = runtimeEntityType.AddProperty(
                "DisplayNames",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("DisplayNames", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<DisplayNames>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true);
            displayNames.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var name = runtimeEntityType.AddProperty(
                "Name",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("Name", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<Name>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true,
                maxLength: 200);
            name.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var properties = runtimeEntityType.AddProperty(
                "Properties",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("Properties", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<Properties>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true);
            properties.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var resources = runtimeEntityType.AddProperty(
                "Resources",
                typeof(string),
                propertyInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetProperty("Resources", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                fieldInfo: typeof(OpenIddictEntityFrameworkCoreScope<int>).GetField("<Resources>k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly),
                nullable: true);
            resources.AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.None);

            var key = runtimeEntityType.AddKey(
                new[] { id });
            runtimeEntityType.SetPrimaryKey(key);

            var index = runtimeEntityType.AddIndex(
                new[] { name },
                unique: true);

            return runtimeEntityType;
        }

        public static void CreateAnnotations(RuntimeEntityType runtimeEntityType)
        {
            runtimeEntityType.AddAnnotation("Relational:FunctionName", null);
            runtimeEntityType.AddAnnotation("Relational:Schema", null);
            runtimeEntityType.AddAnnotation("Relational:SqlQuery", null);
            runtimeEntityType.AddAnnotation("Relational:TableName", "OpenIddictScopes");
            runtimeEntityType.AddAnnotation("Relational:ViewName", null);
            runtimeEntityType.AddAnnotation("Relational:ViewSchema", null);

            Customize(runtimeEntityType);
        }

        static partial void Customize(RuntimeEntityType runtimeEntityType);
    }
}
