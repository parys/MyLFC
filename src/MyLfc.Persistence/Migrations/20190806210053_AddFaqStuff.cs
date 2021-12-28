using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    public partial class AddFaqStuff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FaqCategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    ForSiteTeam = table.Column<bool>(nullable: false),
                    Order = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaqCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FaqItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Question = table.Column<string>(maxLength: 200, nullable: true),
                    Answer = table.Column<string>(maxLength: 2000, nullable: true),
                    Order = table.Column<byte>(nullable: false),
                    LastUpdated = table.Column<DateTimeOffset>(nullable: false),
                    FaqCategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaqItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FaqItems_FaqCategories_FaqCategoryId",
                        column: x => x.FaqCategoryId,
                        principalTable: "FaqCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FaqItems_FaqCategoryId",
                table: "FaqItems",
                column: "FaqCategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FaqItems");

            migrationBuilder.DropTable(
                name: "FaqCategories");
        }
    }
}
