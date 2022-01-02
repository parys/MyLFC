using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    public partial class UpdateOpenIdDict : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_OpenIddictApplications_ClientId",
                table: "OpenIddictApplications");

            migrationBuilder.DropColumn(
                name: "Scope",
                table: "OpenIddictAuthorizations");

            migrationBuilder.DropColumn(
                name: "LogoutRedirectUri",
                table: "OpenIddictApplications");

            migrationBuilder.DropColumn(
                name: "RedirectUri",
                table: "OpenIddictApplications");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "OpenIddictTokens",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Subject",
                table: "OpenIddictTokens",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Timestamp",
                table: "OpenIddictTokens",
                type: "rowversion",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "OpenIddictScopes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<byte[]>(
                name: "Timestamp",
                table: "OpenIddictScopes",
                type: "rowversion",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Subject",
                table: "OpenIddictAuthorizations",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "OpenIddictAuthorizations",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Scopes",
                table: "OpenIddictAuthorizations",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Timestamp",
                table: "OpenIddictAuthorizations",
                type: "rowversion",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "OpenIddictAuthorizations",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "OpenIddictApplications",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ClientId",
                table: "OpenIddictApplications",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PostLogoutRedirectUris",
                table: "OpenIddictApplications",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RedirectUris",
                table: "OpenIddictApplications",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Timestamp",
                table: "OpenIddictApplications",
                type: "rowversion",
                rowVersion: true,
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OpenIddictApplications_ClientId",
                table: "OpenIddictApplications",
                column: "ClientId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_OpenIddictApplications_ClientId",
                table: "OpenIddictApplications");

            migrationBuilder.DropColumn(
                name: "Timestamp",
                table: "OpenIddictTokens");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "OpenIddictScopes");

            migrationBuilder.DropColumn(
                name: "Timestamp",
                table: "OpenIddictScopes");

            migrationBuilder.DropColumn(
                name: "Scopes",
                table: "OpenIddictAuthorizations");

            migrationBuilder.DropColumn(
                name: "Timestamp",
                table: "OpenIddictAuthorizations");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "OpenIddictAuthorizations");

            migrationBuilder.DropColumn(
                name: "PostLogoutRedirectUris",
                table: "OpenIddictApplications");

            migrationBuilder.DropColumn(
                name: "RedirectUris",
                table: "OpenIddictApplications");

            migrationBuilder.DropColumn(
                name: "Timestamp",
                table: "OpenIddictApplications");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "OpenIddictTokens",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Subject",
                table: "OpenIddictTokens",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Subject",
                table: "OpenIddictAuthorizations",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "OpenIddictAuthorizations",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "Scope",
                table: "OpenIddictAuthorizations",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "OpenIddictApplications",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "ClientId",
                table: "OpenIddictApplications",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "LogoutRedirectUri",
                table: "OpenIddictApplications",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RedirectUri",
                table: "OpenIddictApplications",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OpenIddictApplications_ClientId",
                table: "OpenIddictApplications",
                column: "ClientId",
                unique: true,
                filter: "[ClientId] IS NOT NULL");
        }
    }
}
