using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    public partial class IncreasePmFieldLength : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "PrivateMessages",
                maxLength: 50,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 30,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Message",
                table: "PrivateMessages",
                maxLength: 2500,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 500,
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "PrivateMessages",
                maxLength: 30,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 50,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Message",
                table: "PrivateMessages",
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 2500,
                oldNullable: true);
        }
    }
}
