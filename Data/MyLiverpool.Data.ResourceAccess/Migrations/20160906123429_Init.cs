using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyLiverpool.Data.ResourceAccess.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                });

            migrationBuilder.CreateTable(
                name: "Clubs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EnglishName = table.Column<string>(nullable: true),
                    Logo = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Stadium = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clubs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ForumSections",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IdOld = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForumSections", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MaterialCategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    MaterialType = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    OldId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaterialCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Wishs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Message = table.Column<string>(maxLength: 300, nullable: true),
                    Title = table.Column<string>(maxLength: 30, nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wishs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OpenIddictApplications",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClientId = table.Column<string>(nullable: true),
                    ClientSecret = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    LogoutRedirectUri = table.Column<string>(nullable: true),
                    RedirectUri = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OpenIddictApplications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OpenIddictScopes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OpenIddictScopes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Matches",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClubId = table.Column<int>(nullable: false),
                    DateTime = table.Column<DateTime>(nullable: false),
                    IsHome = table.Column<bool>(nullable: false),
                    MatchType = table.Column<int>(nullable: false),
                    Score = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Matches_Clubs_ClubId",
                        column: x => x.ClubId,
                        principalTable: "Clubs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ForumSubsections",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AnswersCount = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    IdOld = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    SectionId = table.Column<int>(nullable: false),
                    ThemesCount = table.Column<int>(nullable: false),
                    Views = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForumSubsections", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ForumSubsections_ForumSections_SectionId",
                        column: x => x.SectionId,
                        principalTable: "ForumSections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ForumThemes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Answers = table.Column<int>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    IdOld = table.Column<int>(nullable: false),
                    IsClosed = table.Column<bool>(nullable: false),
                    IsPool = table.Column<bool>(nullable: false),
                    LastAnswerUserId = table.Column<int>(nullable: false),
                    LastMessageAdditionTime = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    OnTop = table.Column<bool>(nullable: false),
                    SubsectionId = table.Column<int>(nullable: false),
                    Views = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForumThemes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ForumThemes_ForumSubsections_SubsectionId",
                        column: x => x.SubsectionId,
                        principalTable: "ForumSubsections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ForumMessages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AdditionTime = table.Column<DateTime>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    IsFirstMessage = table.Column<bool>(nullable: false),
                    LastModifiedTime = table.Column<DateTime>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    OldId = table.Column<int>(nullable: false),
                    ThemeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForumMessages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ForumMessages_ForumThemes_ThemeId",
                        column: x => x.ThemeId,
                        principalTable: "ForumThemes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MaterialComments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AdditionTime = table.Column<DateTime>(nullable: false),
                    Answer = table.Column<string>(nullable: true),
                    AuthorId = table.Column<int>(nullable: false),
                    IsVerified = table.Column<bool>(nullable: false),
                    LastModified = table.Column<DateTime>(nullable: false),
                    MaterialId = table.Column<int>(nullable: false),
                    MaterialType = table.Column<int>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    OldId = table.Column<int>(nullable: false),
                    ParentId = table.Column<int>(nullable: true),
                    Pending = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaterialComments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MaterialComments_MaterialComments_ParentId",
                        column: x => x.ParentId,
                        principalTable: "MaterialComments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Materials",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AdditionTime = table.Column<DateTime>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    Brief = table.Column<string>(nullable: true),
                    CanCommentary = table.Column<bool>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    LastModified = table.Column<DateTime>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    OldId = table.Column<int>(nullable: false),
                    OnTop = table.Column<bool>(nullable: false),
                    Pending = table.Column<bool>(nullable: false),
                    PhotoPath = table.Column<string>(nullable: true),
                    Rating = table.Column<float>(nullable: false),
                    RatingNumbers = table.Column<int>(nullable: false),
                    RatingSumm = table.Column<int>(nullable: false),
                    Reads = table.Column<int>(nullable: false),
                    Source = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Materials", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Materials_MaterialCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "MaterialCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                });

            migrationBuilder.CreateTable(
                name: "RoleGroups",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: true),
                    RussianName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    RoleGroupId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoles_RoleGroups_RoleGroupId",
                        column: x => x.RoleGroupId,
                        principalTable: "RoleGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Birthday = table.Column<DateTime>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    Gender = table.Column<bool>(nullable: false),
                    Homepage = table.Column<string>(nullable: true),
                    Ip = table.Column<string>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: false),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    OldId = table.Column<int>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    Photo = table.Column<string>(nullable: true),
                    RegistrationDate = table.Column<DateTime>(nullable: false),
                    RoleGroupId = table.Column<int>(nullable: false),
                    SecurityStamp = table.Column<string>(nullable: true),
                    Skype = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_RoleGroups_RoleGroupId",
                        column: x => x.RoleGroupId,
                        principalTable: "RoleGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PrivateMessages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsRead = table.Column<bool>(nullable: false),
                    Message = table.Column<string>(maxLength: 500, nullable: true),
                    ReceiverId = table.Column<int>(nullable: false),
                    SenderId = table.Column<int>(nullable: false),
                    SentTime = table.Column<DateTime>(nullable: false),
                    Title = table.Column<string>(maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrivateMessages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PrivateMessages_AspNetUsers_ReceiverId",
                        column: x => x.ReceiverId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PrivateMessages_AspNetUsers_SenderId",
                        column: x => x.SenderId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OpenIddictAuthorizations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Scope = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OpenIddictAuthorizations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OpenIddictAuthorizations_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OpenIddictTokens",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ApplicationId = table.Column<int>(nullable: true),
                    AuthorizationId = table.Column<int>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OpenIddictTokens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OpenIddictTokens_OpenIddictApplications_ApplicationId",
                        column: x => x.ApplicationId,
                        principalTable: "OpenIddictApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId",
                        column: x => x.AuthorizationId,
                        principalTable: "OpenIddictAuthorizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OpenIddictTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_UserId",
                table: "AspNetUserRoles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumMessages_AuthorId",
                table: "ForumMessages",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumMessages_ThemeId",
                table: "ForumMessages",
                column: "ThemeId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumSubsections_SectionId",
                table: "ForumSubsections",
                column: "SectionId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumThemes_AuthorId",
                table: "ForumThemes",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumThemes_LastAnswerUserId",
                table: "ForumThemes",
                column: "LastAnswerUserId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumThemes_SubsectionId",
                table: "ForumThemes",
                column: "SubsectionId");

            migrationBuilder.CreateIndex(
                name: "IX_Matches_ClubId",
                table: "Matches",
                column: "ClubId");

            migrationBuilder.CreateIndex(
                name: "IX_Materials_AuthorId",
                table: "Materials",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Materials_CategoryId",
                table: "Materials",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_MaterialComments_AuthorId",
                table: "MaterialComments",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_MaterialComments_MaterialId",
                table: "MaterialComments",
                column: "MaterialId");

            migrationBuilder.CreateIndex(
                name: "IX_MaterialComments_ParentId",
                table: "MaterialComments",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_PrivateMessages_ReceiverId",
                table: "PrivateMessages",
                column: "ReceiverId");

            migrationBuilder.CreateIndex(
                name: "IX_PrivateMessages_SenderId",
                table: "PrivateMessages",
                column: "SenderId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoles_RoleGroupId",
                table: "AspNetRoles",
                column: "RoleGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_RoleGroups_RoleId",
                table: "RoleGroups",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_RoleGroupId",
                table: "AspNetUsers",
                column: "RoleGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_OpenIddictApplications_ClientId",
                table: "OpenIddictApplications",
                column: "ClientId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OpenIddictAuthorizations_UserId",
                table: "OpenIddictAuthorizations",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_OpenIddictTokens_ApplicationId",
                table: "OpenIddictTokens",
                column: "ApplicationId");

            migrationBuilder.CreateIndex(
                name: "IX_OpenIddictTokens_AuthorizationId",
                table: "OpenIddictTokens",
                column: "AuthorizationId");

            migrationBuilder.CreateIndex(
                name: "IX_OpenIddictTokens_UserId",
                table: "OpenIddictTokens",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumThemes_AspNetUsers_AuthorId",
                table: "ForumThemes",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ForumThemes_AspNetUsers_LastAnswerUserId",
                table: "ForumThemes",
                column: "LastAnswerUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ForumMessages_AspNetUsers_AuthorId",
                table: "ForumMessages",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MaterialComments_AspNetUsers_AuthorId",
                table: "MaterialComments",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MaterialComments_Materials_MaterialId",
                table: "MaterialComments",
                column: "MaterialId",
                principalTable: "Materials",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Materials_AspNetUsers_AuthorId",
                table: "Materials",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                table: "AspNetUserRoles",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_RoleGroups_AspNetRoles_RoleId",
                table: "RoleGroups",
                column: "RoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoleGroups_AspNetRoles_RoleId",
                table: "RoleGroups");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "ForumMessages");

            migrationBuilder.DropTable(
                name: "Matches");

            migrationBuilder.DropTable(
                name: "MaterialComments");

            migrationBuilder.DropTable(
                name: "PrivateMessages");

            migrationBuilder.DropTable(
                name: "Wishs");

            migrationBuilder.DropTable(
                name: "OpenIddictScopes");

            migrationBuilder.DropTable(
                name: "OpenIddictTokens");

            migrationBuilder.DropTable(
                name: "ForumThemes");

            migrationBuilder.DropTable(
                name: "Clubs");

            migrationBuilder.DropTable(
                name: "Materials");

            migrationBuilder.DropTable(
                name: "OpenIddictApplications");

            migrationBuilder.DropTable(
                name: "OpenIddictAuthorizations");

            migrationBuilder.DropTable(
                name: "ForumSubsections");

            migrationBuilder.DropTable(
                name: "MaterialCategories");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "ForumSections");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "RoleGroups");
        }
    }
}
