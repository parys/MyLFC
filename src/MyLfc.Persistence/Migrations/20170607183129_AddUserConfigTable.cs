using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    public partial class AddUserConfigTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserConfigs",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    IsPmToEmailNotifyEnabled = table.Column<bool>(nullable: false),
                    IsReplyToEmailEnabled = table.Column<bool>(nullable: false),
                    IsReplyToPmEnabled = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserConfigs", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_UserConfigs_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserConfigs");
        }
    }
}
