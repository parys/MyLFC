using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class AddMigrationForOpenIdDict : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "End",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "Start",
            table: "OpenIddictTokens");

        migrationBuilder.AddColumn<DateTimeOffset>(
            name: "CreationDate",
            table: "OpenIddictTokens",
            type: "datetimeoffset",
            nullable: true);

        migrationBuilder.AddColumn<DateTimeOffset>(
            name: "ExpirationDate",
            table: "OpenIddictTokens",
            type: "datetimeoffset",
            nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "CreationDate",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "ExpirationDate",
            table: "OpenIddictTokens");

        migrationBuilder.AddColumn<DateTimeOffset>(
            name: "End",
            table: "OpenIddictTokens",
            nullable: true);

        migrationBuilder.AddColumn<DateTimeOffset>(
            name: "Start",
            table: "OpenIddictTokens",
            nullable: true);
    }
}
