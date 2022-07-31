using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class addUserNameAndCatNameToMaterial : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "CategoryName",
            table: "Materials",
            type: "nvarchar(100)",
            maxLength: 100,
            nullable: true);

        migrationBuilder.Sql(@"
                UPDATE Materials
                SET Materials.CategoryName = MaterialCategories.Name
                FROM
                    Materials
                INNER JOIN
                    MaterialCategories
                ON 
                    Materials.CategoryId = MaterialCategories.Id;
                ");

        migrationBuilder.AddColumn<string>(
            name: "UserName",
            table: "Materials",
            type: "nvarchar(256)",
            maxLength: 256,
            nullable: true);

        migrationBuilder.Sql(@"
                UPDATE Materials
                SET Materials.UserName = AspNetUsers.UserName
                FROM
                    Materials
                INNER JOIN
                    AspNetUsers
                ON 
                    Materials.AuthorId = AspNetUsers.Id;
                ");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "CategoryName",
            table: "Materials");

        migrationBuilder.DropColumn(
            name: "UserName",
            table: "Materials");
    }
}
