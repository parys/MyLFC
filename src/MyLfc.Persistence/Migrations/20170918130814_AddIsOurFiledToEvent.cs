using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    public partial class AddIsOurFiledToEvent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PersonName",
                table: "MatchEvents");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "MatchEvents",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsOur",
                table: "MatchEvents",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsOur",
                table: "MatchEvents");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "MatchEvents",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "PersonName",
                table: "MatchEvents",
                nullable: true);
        }
    }
}
