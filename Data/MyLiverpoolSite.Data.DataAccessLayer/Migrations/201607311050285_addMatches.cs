namespace MyLiverpoolSite.Data.DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addMatches : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Matches",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IsHome = c.Boolean(nullable: false),
                        ClubId = c.Int(nullable: false),
                        DateTime = c.DateTime(nullable: false),
                        MatchType = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Clubs", t => t.ClubId)
                .Index(t => t.ClubId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Matches", "ClubId", "dbo.Clubs");
            DropIndex("dbo.Matches", new[] { "ClubId" });
            DropTable("dbo.Matches");
        }
    }
}
