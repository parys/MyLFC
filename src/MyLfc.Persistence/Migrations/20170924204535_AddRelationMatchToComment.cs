using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class AddRelationMatchToComment : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "MaterialType",
            table: "MaterialComments");

        migrationBuilder.AlterColumn<int>(
            name: "MaterialId",
            table: "MaterialComments",
            type: "int",
            nullable: true,
            oldClrType: typeof(int));

        migrationBuilder.AddColumn<int>(
            name: "MatchId",
            table: "MaterialComments",
            type: "int",
            nullable: true);

        migrationBuilder.AddColumn<int>(
            name: "Type",
            table: "MaterialComments",
            type: "int",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.CreateIndex(
            name: "IX_MaterialComments_MatchId",
            table: "MaterialComments",
            column: "MatchId");

        migrationBuilder.AddForeignKey(
            name: "FK_MaterialComments_Matches_MatchId",
            table: "MaterialComments",
            column: "MatchId",
            principalTable: "Matches",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_Matches_MatchId",
            table: "MaterialComments");

        migrationBuilder.DropIndex(
            name: "IX_MaterialComments_MatchId",
            table: "MaterialComments");

        migrationBuilder.DropColumn(
            name: "MatchId",
            table: "MaterialComments");

        migrationBuilder.DropColumn(
            name: "Type",
            table: "MaterialComments");

        migrationBuilder.AlterColumn<int>(
            name: "MaterialId",
            table: "MaterialComments",
            nullable: false,
            oldClrType: typeof(int),
            oldType: "int",
            oldNullable: true);

        migrationBuilder.AddColumn<int>(
            name: "MaterialType",
            table: "MaterialComments",
            nullable: false,
            defaultValue: 0);
    }
}
