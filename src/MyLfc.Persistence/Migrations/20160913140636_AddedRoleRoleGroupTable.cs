using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class AddedRoleRoleGroupTable : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_AspNetRoles_RoleGroups_RoleGroupId",
            table: "AspNetRoles");

        migrationBuilder.DropForeignKey(
            name: "FK_RoleGroups_AspNetRoles_RoleId",
            table: "RoleGroups");

        migrationBuilder.DropIndex(
            name: "IX_RoleGroups_RoleId",
            table: "RoleGroups");

        migrationBuilder.DropIndex(
            name: "IX_AspNetRoles_RoleGroupId",
            table: "AspNetRoles");

        migrationBuilder.DropColumn(
            name: "RoleId",
            table: "RoleGroups");

        migrationBuilder.DropColumn(
            name: "RoleGroupId",
            table: "AspNetRoles");

        migrationBuilder.CreateTable(
            name: "RoleRoleGroups",
            columns: table => new
            {
                RoleId = table.Column<int>(nullable: false),
                RoleGroupId = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_RoleRoleGroups", x => new { x.RoleId, x.RoleGroupId });
                table.ForeignKey(
                    name: "FK_RoleRoleGroups_RoleGroups_RoleGroupId",
                    column: x => x.RoleGroupId,
                    principalTable: "RoleGroups",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
                table.ForeignKey(
                    name: "FK_RoleRoleGroups_AspNetRoles_RoleId",
                    column: x => x.RoleId,
                    principalTable: "AspNetRoles",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateIndex(
            name: "IX_RoleRoleGroups_RoleGroupId",
            table: "RoleRoleGroups",
            column: "RoleGroupId");

        migrationBuilder.CreateIndex(
            name: "IX_RoleRoleGroups_RoleId",
            table: "RoleRoleGroups",
            column: "RoleId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "RoleRoleGroups");

        migrationBuilder.AddColumn<int>(
            name: "RoleId",
            table: "RoleGroups",
            nullable: true);

        migrationBuilder.AddColumn<int>(
            name: "RoleGroupId",
            table: "AspNetRoles",
            nullable: true);

        migrationBuilder.CreateIndex(
            name: "IX_RoleGroups_RoleId",
            table: "RoleGroups",
            column: "RoleId");

        migrationBuilder.CreateIndex(
            name: "IX_AspNetRoles_RoleGroupId",
            table: "AspNetRoles",
            column: "RoleGroupId");

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetRoles_RoleGroups_RoleGroupId",
            table: "AspNetRoles",
            column: "RoleGroupId",
            principalTable: "RoleGroups",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_RoleGroups_AspNetRoles_RoleId",
            table: "RoleGroups",
            column: "RoleId",
            principalTable: "AspNetRoles",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }
}
