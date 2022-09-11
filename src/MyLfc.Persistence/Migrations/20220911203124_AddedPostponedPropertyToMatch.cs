using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddedPostponedPropertyToMatch : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<bool>(
            name: "Postponed",
            table: "Matches",
            type: "bit",
            nullable: false,
            defaultValue: false);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Postponed",
            table: "Matches");
    }
}
