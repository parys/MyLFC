﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

#pragma warning disable 219, 612, 618
#nullable disable

namespace MyLfc.Persistence.AuthModel
{
    public partial class AuthLiverpoolContextModel
    {
        partial void Initialize()
        {
            var identityRoleClaimint = IdentityRoleClaimintEntityType.Create(this);
            var identityUserClaimint = IdentityUserClaimintEntityType.Create(this);
            var identityUserLoginint = IdentityUserLoginintEntityType.Create(this);
            var identityUserRoleint = IdentityUserRoleintEntityType.Create(this);
            var identityUserTokenint = IdentityUserTokenintEntityType.Create(this);
            var authRole = AuthRoleEntityType.Create(this);
            var authUser = AuthUserEntityType.Create(this);
            var openIddictEntityFrameworkCoreApplicationint = OpenIddictEntityFrameworkCoreApplicationintEntityType.Create(this);
            var openIddictEntityFrameworkCoreAuthorizationint = OpenIddictEntityFrameworkCoreAuthorizationintEntityType.Create(this);
            var openIddictEntityFrameworkCoreScopeint = OpenIddictEntityFrameworkCoreScopeintEntityType.Create(this);
            var openIddictEntityFrameworkCoreTokenint = OpenIddictEntityFrameworkCoreTokenintEntityType.Create(this);

            IdentityRoleClaimintEntityType.CreateForeignKey1(identityRoleClaimint, authRole);
            IdentityUserClaimintEntityType.CreateForeignKey1(identityUserClaimint, authUser);
            IdentityUserLoginintEntityType.CreateForeignKey1(identityUserLoginint, authUser);
            IdentityUserRoleintEntityType.CreateForeignKey1(identityUserRoleint, authRole);
            IdentityUserRoleintEntityType.CreateForeignKey2(identityUserRoleint, authUser);
            IdentityUserTokenintEntityType.CreateForeignKey1(identityUserTokenint, authUser);
            OpenIddictEntityFrameworkCoreAuthorizationintEntityType.CreateForeignKey1(openIddictEntityFrameworkCoreAuthorizationint, openIddictEntityFrameworkCoreApplicationint);
            OpenIddictEntityFrameworkCoreTokenintEntityType.CreateForeignKey1(openIddictEntityFrameworkCoreTokenint, openIddictEntityFrameworkCoreApplicationint);
            OpenIddictEntityFrameworkCoreTokenintEntityType.CreateForeignKey2(openIddictEntityFrameworkCoreTokenint, openIddictEntityFrameworkCoreAuthorizationint);

            IdentityRoleClaimintEntityType.CreateAnnotations(identityRoleClaimint);
            IdentityUserClaimintEntityType.CreateAnnotations(identityUserClaimint);
            IdentityUserLoginintEntityType.CreateAnnotations(identityUserLoginint);
            IdentityUserRoleintEntityType.CreateAnnotations(identityUserRoleint);
            IdentityUserTokenintEntityType.CreateAnnotations(identityUserTokenint);
            AuthRoleEntityType.CreateAnnotations(authRole);
            AuthUserEntityType.CreateAnnotations(authUser);
            OpenIddictEntityFrameworkCoreApplicationintEntityType.CreateAnnotations(openIddictEntityFrameworkCoreApplicationint);
            OpenIddictEntityFrameworkCoreAuthorizationintEntityType.CreateAnnotations(openIddictEntityFrameworkCoreAuthorizationint);
            OpenIddictEntityFrameworkCoreScopeintEntityType.CreateAnnotations(openIddictEntityFrameworkCoreScopeint);
            OpenIddictEntityFrameworkCoreTokenintEntityType.CreateAnnotations(openIddictEntityFrameworkCoreTokenint);

            AddAnnotation("ProductVersion", "6.0.7");
            AddAnnotation("Relational:MaxIdentifierLength", 128);
            AddAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);
        }
    }
}