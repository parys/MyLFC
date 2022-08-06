using System;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class MyLfcDataResourceAccess : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<DateTime>(
            name: "Created",
            table: "MatchPersons",
            nullable: false,
            defaultValue: new DateTime(2018, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Created",
            table: "MatchPersons");
    }
}
