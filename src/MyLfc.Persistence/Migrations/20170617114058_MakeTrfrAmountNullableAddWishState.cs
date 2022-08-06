using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class MakeTrfrAmountNullableAddWishState : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "State",
            table: "Wishes",
            nullable: false,
            defaultValue: 1);

        migrationBuilder.AlterColumn<int>(
            name: "Amount",
            table: "Transfers",
            nullable: true,
            oldClrType: typeof(int));

        migrationBuilder.AddColumn<int>(
            name: "SeasonId",
            table: "Transfers",
            nullable: true);

        migrationBuilder.CreateIndex(
            name: "IX_Transfers_SeasonId",
            table: "Transfers",
            column: "SeasonId");

        migrationBuilder.AddForeignKey(
            name: "FK_Transfers_Seasons_SeasonId",
            table: "Transfers",
            column: "SeasonId",
            principalTable: "Seasons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_Transfers_Seasons_SeasonId",
            table: "Transfers");

        migrationBuilder.DropIndex(
            name: "IX_Transfers_SeasonId",
            table: "Transfers");

        migrationBuilder.DropColumn(
            name: "State",
            table: "Wishes");

        migrationBuilder.DropColumn(
            name: "SeasonId",
            table: "Transfers");

        migrationBuilder.AlterColumn<int>(
            name: "Amount",
            table: "Transfers",
            nullable: false,
            oldClrType: typeof(int),
            oldNullable: true);
    }
}
