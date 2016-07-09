namespace MyLiverpoolSite.Data.DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateForumThemeTable : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.ForumThemes", new[] { "Author_Id" });
            DropIndex("dbo.ForumThemes", new[] { "LastAnswerUser_Id" });
            RenameColumn(table: "dbo.ForumThemes", name: "Author_Id", newName: "AuthorId");
            RenameColumn(table: "dbo.ForumThemes", name: "LastAnswerUser_Id", newName: "LastAnswerUserId");
            AlterColumn("dbo.ForumThemes", "LastMessageAdditionTime", c => c.DateTime());
          //  AlterColumn("dbo.ForumThemes", "AuthorId", c => c.Int(nullable: false));
          //  AlterColumn("dbo.ForumThemes", "LastAnswerUserId", c => c.Int(nullable: false));
            CreateIndex("dbo.ForumThemes", "AuthorId");
            CreateIndex("dbo.ForumThemes", "LastAnswerUserId");
        }
        
        public override void Down()
        {
            DropIndex("dbo.ForumThemes", new[] { "LastAnswerUserId" });
            DropIndex("dbo.ForumThemes", new[] { "AuthorId" });
            AlterColumn("dbo.ForumThemes", "LastAnswerUserId", c => c.Int());
            AlterColumn("dbo.ForumThemes", "AuthorId", c => c.Int());
            AlterColumn("dbo.ForumThemes", "LastMessageAdditionTime", c => c.DateTime(nullable: false));
            RenameColumn(table: "dbo.ForumThemes", name: "LastAnswerUserId", newName: "LastAnswerUser_Id");
            RenameColumn(table: "dbo.ForumThemes", name: "AuthorId", newName: "Author_Id");
            CreateIndex("dbo.ForumThemes", "LastAnswerUser_Id");
            CreateIndex("dbo.ForumThemes", "Author_Id");
        }
    }
}
