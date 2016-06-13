namespace MyLiverpoolSite.Data.DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ForumMessages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OldId = c.Int(nullable: false),
                        ThemeId = c.Int(nullable: false),
                        AdditionTime = c.DateTime(nullable: false),
                        IsFirstMessage = c.Boolean(nullable: false),
                        Message = c.String(),
                        AuthorId = c.Int(nullable: false),
                        LastModifiedTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.AuthorId)
                .ForeignKey("dbo.ForumThemes", t => t.ThemeId)
                .Index(t => t.ThemeId)
                .Index(t => t.AuthorId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OldId = c.Int(nullable: false),
                        Photo = c.String(),
                        FullName = c.String(),
                        Gender = c.Boolean(nullable: false),
                        Homepage = c.String(),
                        Skype = c.String(),
                        Country = c.String(),
                        City = c.String(),
                        RegistrationDate = c.DateTime(nullable: false),
                        Ip = c.String(),
                        Birthday = c.DateTime(),
                        LastModified = c.DateTime(nullable: false),
                        Title = c.String(),
                        RoleGroupId = c.Int(nullable: false),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.RoleGroups", t => t.RoleGroupId)
                .Index(t => t.RoleGroupId)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.MaterialComments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OldId = c.Int(nullable: false),
                        Pending = c.Boolean(nullable: false),
                        AdditionTime = c.DateTime(nullable: false),
                        LastModified = c.DateTime(nullable: false),
                        AuthorId = c.Int(nullable: false),
                        Message = c.String(),
                        Answer = c.String(),
                        ParentId = c.Int(),
                        MaterialId = c.Int(nullable: false),
                        MaterialType = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.AuthorId)
                .ForeignKey("dbo.Materials", t => t.MaterialId)
                .ForeignKey("dbo.MaterialComments", t => t.ParentId)
                .Index(t => t.AuthorId)
                .Index(t => t.ParentId)
                .Index(t => t.MaterialId);
            
            CreateTable(
                "dbo.Materials",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OldId = c.Int(nullable: false),
                        Pending = c.Boolean(nullable: false),
                        OnTop = c.Boolean(nullable: false),
                        CanCommentary = c.Boolean(nullable: false),
                        AdditionTime = c.DateTime(nullable: false),
                        Title = c.String(),
                        Brief = c.String(),
                        Message = c.String(),
                        Reads = c.Int(nullable: false),
                        Source = c.String(),
                        Rating = c.Single(nullable: false),
                        RatingNumbers = c.Int(nullable: false),
                        RatingSumm = c.Int(nullable: false),
                        PhotoPath = c.String(),
                        LastModified = c.DateTime(nullable: false),
                        CategoryId = c.Int(nullable: false),
                        AuthorId = c.Int(nullable: false),
                        Type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.AuthorId)
                .ForeignKey("dbo.MaterialCategories", t => t.CategoryId)
                .Index(t => t.CategoryId)
                .Index(t => t.AuthorId);
            
            CreateTable(
                "dbo.MaterialCategories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OldId = c.Int(nullable: false),
                        Name = c.String(),
                        Description = c.String(),
                        MaterialType = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.PrivateMessages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        SenderId = c.Int(nullable: false),
                        ReceiverId = c.Int(nullable: false),
                        Title = c.String(maxLength: 30),
                        Message = c.String(maxLength: 500),
                        SentTime = c.DateTime(nullable: false),
                        IsRead = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ReceiverId)
                .ForeignKey("dbo.AspNetUsers", t => t.SenderId)
                .Index(t => t.SenderId)
                .Index(t => t.ReceiverId);
            
            CreateTable(
                "dbo.RoleGroups",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        RussianName = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.Int(nullable: false),
                        RoleId = c.Int(nullable: false),
                        Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.ForumThemes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdOld = c.Int(nullable: false),
                        SubsectionId = c.Int(nullable: false),
                        IsPool = c.Boolean(nullable: false),
                        OnTop = c.Boolean(nullable: false),
                        LastMessageAdditionTime = c.DateTime(nullable: false),
                        IsClosed = c.Boolean(nullable: false),
                        Answers = c.Int(nullable: false),
                        Views = c.Int(nullable: false),
                        Name = c.String(),
                        Description = c.String(),
                        Author_Id = c.Int(),
                        LastAnswerUser_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.Author_Id)
                .ForeignKey("dbo.AspNetUsers", t => t.LastAnswerUser_Id)
                .ForeignKey("dbo.ForumSubsections", t => t.SubsectionId)
                .Index(t => t.SubsectionId)
                .Index(t => t.Author_Id)
                .Index(t => t.LastAnswerUser_Id);
            
            CreateTable(
                "dbo.ForumSubsections",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdOld = c.Int(nullable: false),
                        SectionId = c.Int(nullable: false),
                        Name = c.String(),
                        Description = c.String(),
                        ThemesCount = c.Int(nullable: false),
                        AnswersCount = c.Int(nullable: false),
                        Views = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ForumSections", t => t.SectionId)
                .Index(t => t.SectionId);
            
            CreateTable(
                "dbo.ForumSections",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdOld = c.Int(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RoleRoleGroups",
                c => new
                    {
                        Role_Id = c.Int(nullable: false),
                        RoleGroup_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Role_Id, t.RoleGroup_Id })
                .ForeignKey("dbo.AspNetRoles", t => t.Role_Id, cascadeDelete: true)
                .ForeignKey("dbo.RoleGroups", t => t.RoleGroup_Id, cascadeDelete: true)
                .Index(t => t.Role_Id)
                .Index(t => t.RoleGroup_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ForumMessages", "ThemeId", "dbo.ForumThemes");
            DropForeignKey("dbo.ForumThemes", "SubsectionId", "dbo.ForumSubsections");
            DropForeignKey("dbo.ForumSubsections", "SectionId", "dbo.ForumSections");
            DropForeignKey("dbo.ForumThemes", "LastAnswerUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.ForumThemes", "Author_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUsers", "RoleGroupId", "dbo.RoleGroups");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.RoleRoleGroups", "RoleGroup_Id", "dbo.RoleGroups");
            DropForeignKey("dbo.RoleRoleGroups", "Role_Id", "dbo.AspNetRoles");
            DropForeignKey("dbo.PrivateMessages", "SenderId", "dbo.AspNetUsers");
            DropForeignKey("dbo.PrivateMessages", "ReceiverId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.ForumMessages", "AuthorId", "dbo.AspNetUsers");
            DropForeignKey("dbo.MaterialComments", "ParentId", "dbo.MaterialComments");
            DropForeignKey("dbo.MaterialComments", "MaterialId", "dbo.Materials");
            DropForeignKey("dbo.Materials", "CategoryId", "dbo.MaterialCategories");
            DropForeignKey("dbo.Materials", "AuthorId", "dbo.AspNetUsers");
            DropForeignKey("dbo.MaterialComments", "AuthorId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropIndex("dbo.RoleRoleGroups", new[] { "RoleGroup_Id" });
            DropIndex("dbo.RoleRoleGroups", new[] { "Role_Id" });
            DropIndex("dbo.ForumSubsections", new[] { "SectionId" });
            DropIndex("dbo.ForumThemes", new[] { "LastAnswerUser_Id" });
            DropIndex("dbo.ForumThemes", new[] { "Author_Id" });
            DropIndex("dbo.ForumThemes", new[] { "SubsectionId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.PrivateMessages", new[] { "ReceiverId" });
            DropIndex("dbo.PrivateMessages", new[] { "SenderId" });
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.Materials", new[] { "AuthorId" });
            DropIndex("dbo.Materials", new[] { "CategoryId" });
            DropIndex("dbo.MaterialComments", new[] { "MaterialId" });
            DropIndex("dbo.MaterialComments", new[] { "ParentId" });
            DropIndex("dbo.MaterialComments", new[] { "AuthorId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUsers", new[] { "RoleGroupId" });
            DropIndex("dbo.ForumMessages", new[] { "AuthorId" });
            DropIndex("dbo.ForumMessages", new[] { "ThemeId" });
            DropTable("dbo.RoleRoleGroups");
            DropTable("dbo.ForumSections");
            DropTable("dbo.ForumSubsections");
            DropTable("dbo.ForumThemes");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.RoleGroups");
            DropTable("dbo.PrivateMessages");
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.MaterialCategories");
            DropTable("dbo.Materials");
            DropTable("dbo.MaterialComments");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.ForumMessages");
        }
    }
}
