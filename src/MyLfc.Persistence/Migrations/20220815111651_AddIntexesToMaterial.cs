using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class AddIntexesToMaterial : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateIndex(
            name: "IX_Mat_Del_Pen",
            table: "Materials",
            columns: new[] { "Deleted", "Pending" })
            .Annotation("SqlServer:Clustered", false);

        migrationBuilder.CreateIndex(
            name: "IX_Mat_Del_Pen_Top",
            table: "Materials",
            columns: new[] { "Deleted", "Pending", "OnTop" })
            .Annotation("SqlServer:Clustered", false);

        migrationBuilder.CreateIndex(
            name: "IX_Mat_Pending",
            table: "Materials",
            column: "Pending")
            .Annotation("SqlServer:Clustered", false);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropIndex(
            name: "IX_Mat_Del_Pen",
            table: "Materials");

        migrationBuilder.DropIndex(
            name: "IX_Mat_Del_Pen_Top",
            table: "Materials");

        migrationBuilder.DropIndex(
            name: "IX_Mat_Pending",
            table: "Materials");
    }
}
