namespace MyLiverpoolSite.Data.DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addMatchesScore : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Matches", "Score", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Matches", "Score");
        }
    }
}
