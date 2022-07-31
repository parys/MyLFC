using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class AddDeletedFieldToMaterialAndComment : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Rating",
            table: "Materials");

        migrationBuilder.DropColumn(
            name: "RatingNumbers",
            table: "Materials");

        migrationBuilder.DropColumn(
            name: "RatingSumm",
            table: "Materials");

        migrationBuilder.AddColumn<bool>(
            name: "Deleted",
            table: "Materials",
            nullable: false,
            defaultValue: false);

        migrationBuilder.AddColumn<bool>(
            name: "Deleted",
            table: "MaterialComments",
            nullable: false,
            defaultValue: false);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Deleted",
            table: "Materials");

        migrationBuilder.DropColumn(
            name: "Deleted",
            table: "MaterialComments");

        migrationBuilder.AddColumn<float>(
            name: "Rating",
            table: "Materials",
            nullable: false,
            defaultValue: 0f);

        migrationBuilder.AddColumn<int>(
            name: "RatingNumbers",
            table: "Materials",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.AddColumn<int>(
            name: "RatingSumm",
            table: "Materials",
            nullable: false,
            defaultValue: 0);
    }
}
