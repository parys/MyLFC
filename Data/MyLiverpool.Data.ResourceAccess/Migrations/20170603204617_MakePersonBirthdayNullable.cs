using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLiverpool.Data.ResourceAccess.Migrations
{
    public partial class MakePersonBirthdayNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "Birthday",
                table: "Persons",
                nullable: true,
                oldClrType: typeof(DateTimeOffset));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "Birthday",
                table: "Persons",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldNullable: true);
        }
    }
}
