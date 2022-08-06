using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddPersonTable : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "Subject",
            table: "OpenIddictTokens",
            nullable: true);

        migrationBuilder.AddColumn<int>(
            name: "ApplicationId",
            table: "OpenIddictAuthorizations",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Subject",
            table: "OpenIddictAuthorizations",
            nullable: true);

        migrationBuilder.CreateTable(
            name: "Persons",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                FirstName = table.Column<string>(nullable: true),
                FirstRussianName = table.Column<string>(nullable: true),
                LastName = table.Column<string>(nullable: true),
                LastRussianName = table.Column<string>(nullable: true),
                Photo = table.Column<string>(nullable: true),
                Type = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Persons", x => x.Id);
            });

        migrationBuilder.CreateIndex(
            name: "IX_OpenIddictAuthorizations_ApplicationId",
            table: "OpenIddictAuthorizations",
            column: "ApplicationId");

        migrationBuilder.AddForeignKey(
            name: "FK_OpenIddictAuthorizations_OpenIddictApplications_ApplicationId",
            table: "OpenIddictAuthorizations",
            column: "ApplicationId",
            principalTable: "OpenIddictApplications",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_OpenIddictAuthorizations_OpenIddictApplications_ApplicationId",
            table: "OpenIddictAuthorizations");

        migrationBuilder.DropTable(
            name: "Persons");

        migrationBuilder.DropIndex(
            name: "IX_OpenIddictAuthorizations_ApplicationId",
            table: "OpenIddictAuthorizations");

        migrationBuilder.DropColumn(
            name: "Subject",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "ApplicationId",
            table: "OpenIddictAuthorizations");

        migrationBuilder.DropColumn(
            name: "Subject",
            table: "OpenIddictAuthorizations");
    }
}
