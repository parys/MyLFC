using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddInititalPoll : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "PollId",
            table: "MaterialComments",
            nullable: true);

        migrationBuilder.CreateTable(
            name: "Polls",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                Question = table.Column<string>(maxLength: 100, nullable: true),
                StartTime = table.Column<DateTimeOffset>(nullable: false),
                EndTime = table.Column<DateTimeOffset>(nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Polls", x => x.Id);
            });

        migrationBuilder.CreateTable(
            name: "PollAnswers",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                PollId = table.Column<int>(nullable: false),
                Text = table.Column<string>(maxLength: 100, nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_PollAnswers", x => x.Id);
                table.ForeignKey(
                    name: "FK_PollAnswers_Polls_PollId",
                    column: x => x.PollId,
                    principalTable: "Polls",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateTable(
            name: "PollAnswerUsers",
            columns: table => new
            {
                PollId = table.Column<int>(nullable: false),
                PollAnswerId = table.Column<int>(nullable: false),
                UserId = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_PollAnswerUsers", x => new { x.PollAnswerId, x.UserId });
                table.ForeignKey(
                    name: "FK_PollAnswerUsers_PollAnswers_PollAnswerId",
                    column: x => x.PollAnswerId,
                    principalTable: "PollAnswers",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
                table.ForeignKey(
                    name: "FK_PollAnswerUsers_Polls_PollId",
                    column: x => x.PollId,
                    principalTable: "Polls",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
                table.ForeignKey(
                    name: "FK_PollAnswerUsers_AspNetUsers_UserId",
                    column: x => x.UserId,
                    principalTable: "AspNetUsers",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateIndex(
            name: "IX_MaterialComments_PollId",
            table: "MaterialComments",
            column: "PollId");

        migrationBuilder.CreateIndex(
            name: "IX_PollAnswers_PollId",
            table: "PollAnswers",
            column: "PollId");

        migrationBuilder.CreateIndex(
            name: "IX_PollAnswerUsers_PollId",
            table: "PollAnswerUsers",
            column: "PollId");

        migrationBuilder.CreateIndex(
            name: "IX_PollAnswerUsers_UserId",
            table: "PollAnswerUsers",
            column: "UserId");

        migrationBuilder.AddForeignKey(
            name: "FK_MaterialComments_Polls_PollId",
            table: "MaterialComments",
            column: "PollId",
            principalTable: "Polls",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_Polls_PollId",
            table: "MaterialComments");

        migrationBuilder.DropTable(
            name: "PollAnswerUsers");

        migrationBuilder.DropTable(
            name: "PollAnswers");

        migrationBuilder.DropTable(
            name: "Polls");

        migrationBuilder.DropIndex(
            name: "IX_MaterialComments_PollId",
            table: "MaterialComments");

        migrationBuilder.DropColumn(
            name: "PollId",
            table: "MaterialComments");
    }
}
