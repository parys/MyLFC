using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyLiverpool.Data.ResourceAccess.Migrations
{
    public partial class UpdateMatchTabe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "UsePhotoInBody",
                table: "Materials",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "PreviewId",
                table: "Matches",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ReportId",
                table: "Matches",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndTime",
                table: "Injuries",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UsePhotoInBody",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "PreviewId",
                table: "Matches");

            migrationBuilder.DropColumn(
                name: "ReportId",
                table: "Matches");

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndTime",
                table: "Injuries",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
