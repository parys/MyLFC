using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace MyLfc.Data.ResourceAccess.Migrations
{
    [ExcludeFromCodeCoverage]
    public partial class AddIntexesToMaterial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Mat_AdditionTime",
                table: "Materials",
                column: "AdditionTime")
                .Annotation("SqlServer:Clustered", false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Mat_AdditionTime",
                table: "Materials");
        }
    }
}
