using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations
{
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
}
