using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddInjuriesAndLoanTables : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Injuries",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                Description = table.Column<string>(nullable: true),
                EndTime = table.Column<DateTime>(nullable: false),
                PersonId = table.Column<int>(nullable: false),
                StartTime = table.Column<DateTime>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Injuries", x => x.Id);
                table.ForeignKey(
                    name: "FK_Injuries_Persons_PersonId",
                    column: x => x.PersonId,
                    principalTable: "Persons",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateTable(
            name: "Loans",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                Came = table.Column<bool>(nullable: false),
                ClubId = table.Column<int>(nullable: false),
                EndTime = table.Column<DateTime>(nullable: false),
                PersonId = table.Column<int>(nullable: false),
                StartTime = table.Column<DateTime>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Loans", x => x.Id);
                table.ForeignKey(
                    name: "FK_Loans_Clubs_ClubId",
                    column: x => x.ClubId,
                    principalTable: "Clubs",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
                table.ForeignKey(
                    name: "FK_Loans_Persons_PersonId",
                    column: x => x.PersonId,
                    principalTable: "Persons",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateIndex(
            name: "IX_Injuries_PersonId",
            table: "Injuries",
            column: "PersonId");

        migrationBuilder.CreateIndex(
            name: "IX_Loans_ClubId",
            table: "Loans",
            column: "ClubId");

        migrationBuilder.CreateIndex(
            name: "IX_Loans_PersonId",
            table: "Loans",
            column: "PersonId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "Injuries");

        migrationBuilder.DropTable(
            name: "Loans");
    }
}
