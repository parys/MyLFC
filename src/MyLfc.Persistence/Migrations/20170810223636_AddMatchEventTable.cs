using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddMatchEventTable : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AlterColumn<string>(
            name: "Message",
            table: "Wishes",
            nullable: true,
            oldClrType: typeof(string),
            oldMaxLength: 300,
            oldNullable: true);

        migrationBuilder.CreateTable(
            name: "MatchEvents",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                MatchId = table.Column<int>(nullable: false),
                Minute = table.Column<string>(nullable: true),
                PersonId = table.Column<int>(nullable: true),
                PersonName = table.Column<string>(nullable: true),
                SeasonId = table.Column<int>(nullable: false),
                Type = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_MatchEvents", x => x.Id);
                table.ForeignKey(
                    name: "FK_MatchEvents_Matches_MatchId",
                    column: x => x.MatchId,
                    principalTable: "Matches",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
                table.ForeignKey(
                    name: "FK_MatchEvents_Persons_PersonId",
                    column: x => x.PersonId,
                    principalTable: "Persons",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
                table.ForeignKey(
                    name: "FK_MatchEvents_Seasons_SeasonId",
                    column: x => x.SeasonId,
                    principalTable: "Seasons",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateIndex(
            name: "IX_MatchEvents_MatchId",
            table: "MatchEvents",
            column: "MatchId");

        migrationBuilder.CreateIndex(
            name: "IX_MatchEvents_PersonId",
            table: "MatchEvents",
            column: "PersonId");

        migrationBuilder.CreateIndex(
            name: "IX_MatchEvents_SeasonId",
            table: "MatchEvents",
            column: "SeasonId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "MatchEvents");

        migrationBuilder.AlterColumn<string>(
            name: "Message",
            table: "Wishes",
            maxLength: 300,
            nullable: true,
            oldClrType: typeof(string),
            oldNullable: true);
    }
}
