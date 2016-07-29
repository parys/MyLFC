namespace MyLiverpoolSite.Data.DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addClub : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Clubs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Stadium = c.String(),
                        Logo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Clubs");
        }
    }
}
