using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class RemoveUnusedFieldsFromUser : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "City",
            table: "AspNetUsers");

        migrationBuilder.DropColumn(
            name: "Country",
            table: "AspNetUsers");

        migrationBuilder.DropColumn(
            name: "Homepage",
            table: "AspNetUsers");

        migrationBuilder.DropColumn(
            name: "OldId",
            table: "AspNetUsers");

        migrationBuilder.DropColumn(
            name: "Skype",
            table: "AspNetUsers");

        migrationBuilder.DropColumn(
            name: "Title",
            table: "AspNetUsers");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "City",
            table: "AspNetUsers",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Country",
            table: "AspNetUsers",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Homepage",
            table: "AspNetUsers",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<int>(
            name: "OldId",
            table: "AspNetUsers",
            type: "int",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.AddColumn<string>(
            name: "Skype",
            table: "AspNetUsers",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Title",
            table: "AspNetUsers",
            type: "nvarchar(max)",
            nullable: true);
    }
}
