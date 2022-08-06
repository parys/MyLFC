using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddNicknameAndNumberToPersonAndMP : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Pending",
            table: "MaterialComments");

        migrationBuilder.AddColumn<string>(
            name: "Nickname",
            table: "Persons",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<byte>(
            name: "Number",
            table: "MatchPersons",
            type: "tinyint",
            nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Nickname",
            table: "Persons");

        migrationBuilder.DropColumn(
            name: "Number",
            table: "MatchPersons");

        migrationBuilder.AddColumn<bool>(
            name: "Pending",
            table: "MaterialComments",
            type: "bit",
            nullable: false,
            defaultValue: false);
    }
}
