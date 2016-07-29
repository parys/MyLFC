namespace MyLiverpoolSite.Data.DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addClubColumnEngName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Clubs", "EnglishName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Clubs", "EnglishName");
        }
    }
}
