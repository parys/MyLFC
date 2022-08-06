using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddStadiumTable : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "StadiumId",
            table: "Matches",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.AddColumn<int>(
            name: "StadiumId",
            table: "Clubs",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.CreateTable(
            name: "Stadiums",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                City = table.Column<string>(nullable: true),
                Name = table.Column<string>(nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Stadium", x => x.Id);
            });

        migrationBuilder.CreateIndex(
            name: "IX_Matches_StadiumId",
            table: "Matches",
            column: "StadiumId");

        migrationBuilder.CreateIndex(
            name: "IX_Clubs_StadiumId",
            table: "Clubs",
            column: "StadiumId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "Stadiums");

        migrationBuilder.DropIndex(
            name: "IX_Matches_StadiumId",
            table: "Matches");

        migrationBuilder.DropIndex(
            name: "IX_Clubs_StadiumId",
            table: "Clubs");

        migrationBuilder.DropColumn(
            name: "StadiumId",
            table: "Matches");

        migrationBuilder.DropColumn(
            name: "StadiumId",
            table: "Clubs");
    }
}
