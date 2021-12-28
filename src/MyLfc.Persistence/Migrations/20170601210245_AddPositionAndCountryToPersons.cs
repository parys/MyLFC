using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    public partial class AddPositionAndCountryToPersons : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Persons",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Position",
                table: "Persons",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Country",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Position",
                table: "Persons");
        }
    }
}
