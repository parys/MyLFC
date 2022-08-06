using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class FixedCommentVoteRelations : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_CommentVotes_AspNetUsers_CommentId",
            table: "CommentVotes");

        migrationBuilder.AddForeignKey(
            name: "FK_CommentVotes_AspNetUsers_UserId",
            table: "CommentVotes",
            column: "UserId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_CommentVotes_AspNetUsers_UserId",
            table: "CommentVotes");

        migrationBuilder.AddForeignKey(
            name: "FK_CommentVotes_AspNetUsers_CommentId",
            table: "CommentVotes",
            column: "CommentId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }
}
