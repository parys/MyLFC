using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddEntityIdColumnToCommentVote : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "EntityId",
            table: "CommentVotes",
            type: "int",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.Sql("UPDATE [CommentVotes] SET [EntityId]= COALESCE(mc.MatchId, mc.MaterialId) FROM [CommentVotes] cv INNER JOIN [MaterialComments] mc ON cv.CommentId = mc.Id");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "EntityId",
            table: "CommentVotes");
    }
}
