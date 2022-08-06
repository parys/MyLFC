using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddUrlsFieldsToMatch : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "PhotoUrl",
            table: "Matches",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "ReportUrl",
            table: "Matches",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "VideoUrl",
            table: "Matches",
            nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "PhotoUrl",
            table: "Matches");

        migrationBuilder.DropColumn(
            name: "ReportUrl",
            table: "Matches");

        migrationBuilder.DropColumn(
            name: "VideoUrl",
            table: "Matches");
    }
}
