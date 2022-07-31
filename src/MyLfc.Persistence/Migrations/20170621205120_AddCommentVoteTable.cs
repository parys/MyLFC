using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class AddCommentVoteTable : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "CommentVotes",
            columns: table => new
            {
                UserId = table.Column<int>(nullable: false),
                CommentId = table.Column<int>(nullable: false),
                Positive = table.Column<bool>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_CommentVotes", x => new { x.UserId, x.CommentId });
                table.ForeignKey(
                    name: "FK_CommentVotes_MaterialComments_CommentId",
                    column: x => x.CommentId,
                    principalTable: "MaterialComments",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
                table.ForeignKey(
                    name: "FK_CommentVotes_AspNetUsers_CommentId",
                    column: x => x.CommentId,
                    principalTable: "AspNetUsers",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateIndex(
            name: "IX_CommentVotes_CommentId",
            table: "CommentVotes",
            column: "CommentId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "CommentVotes");
    }
}
