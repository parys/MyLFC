using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyLfc.Data.ResourceAccess.Migrations;

public partial class MigrateToCore2 : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
            table: "AspNetRoleClaims");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserClaims_AspNetUsers_UserId",
            table: "AspNetUserClaims");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserLogins_AspNetUsers_UserId",
            table: "AspNetUserLogins");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
            table: "AspNetUserRoles");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserRoles_AspNetUsers_UserId",
            table: "AspNetUserRoles");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUsers_RoleGroups_RoleGroupId",
            table: "AspNetUsers");

        migrationBuilder.DropForeignKey(
            name: "FK_ChatMessages_AspNetUsers_AuthorId",
            table: "ChatMessages");

        //migrationBuilder.DropForeignKey(
        //    name: "FK_Clubs_Stadiums_StadiumId",
        //    table: "Clubs");

        migrationBuilder.DropForeignKey(
            name: "FK_CommentVotes_MaterialComments_CommentId",
            table: "CommentVotes");

        migrationBuilder.DropForeignKey(
            name: "FK_CommentVotes_AspNetUsers_UserId",
            table: "CommentVotes");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumMessages_AspNetUsers_AuthorId",
            table: "ForumMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumMessages_ForumThemes_ThemeId",
            table: "ForumMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumSubsections_ForumSections_SectionId",
            table: "ForumSubsections");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumThemes_AspNetUsers_AuthorId",
            table: "ForumThemes");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumThemes_AspNetUsers_LastAnswerUserId",
            table: "ForumThemes");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumThemes_ForumSubsections_SubsectionId",
            table: "ForumThemes");

        migrationBuilder.DropForeignKey(
            name: "FK_Injuries_Persons_PersonId",
            table: "Injuries");

        migrationBuilder.DropForeignKey(
            name: "FK_Loans_Clubs_ClubId",
            table: "Loans");

        migrationBuilder.DropForeignKey(
            name: "FK_Loans_Persons_PersonId",
            table: "Loans");

        migrationBuilder.DropForeignKey(
            name: "FK_Matches_Clubs_ClubId",
            table: "Matches");

        migrationBuilder.DropForeignKey(
            name: "FK_Matches_Seasons_SeasonId",
            table: "Matches");

        //migrationBuilder.DropForeignKey(
        //    name: "FK_Matches_Stadiums_StadiumId",
        //    table: "Matches");

        migrationBuilder.DropForeignKey(
            name: "FK_MatchEvents_Matches_MatchId",
            table: "MatchEvents");

        migrationBuilder.DropForeignKey(
            name: "FK_MatchEvents_Persons_PersonId",
            table: "MatchEvents");

        migrationBuilder.DropForeignKey(
            name: "FK_MatchEvents_Seasons_SeasonId",
            table: "MatchEvents");

        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_AspNetUsers_AuthorId",
            table: "MaterialComments");

        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_Materials_MaterialId",
            table: "MaterialComments");

        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_MaterialComments_ParentId",
            table: "MaterialComments");

        migrationBuilder.DropForeignKey(
            name: "FK_Materials_AspNetUsers_AuthorId",
            table: "Materials");

        migrationBuilder.DropForeignKey(
            name: "FK_Materials_MaterialCategories_CategoryId",
            table: "Materials");

        migrationBuilder.DropForeignKey(
            name: "FK_OpenIddictAuthorizations_OpenIddictApplications_ApplicationId",
            table: "OpenIddictAuthorizations");

        migrationBuilder.DropForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictApplications_ApplicationId",
            table: "OpenIddictTokens");

        migrationBuilder.DropForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId",
            table: "OpenIddictTokens");

        migrationBuilder.DropForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_ReceiverId",
            table: "PrivateMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_SenderId",
            table: "PrivateMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_RoleRoleGroups_RoleGroups_RoleGroupId",
            table: "RoleRoleGroups");

        migrationBuilder.DropForeignKey(
            name: "FK_RoleRoleGroups_AspNetRoles_RoleId",
            table: "RoleRoleGroups");

        migrationBuilder.DropForeignKey(
            name: "FK_Transfers_Clubs_ClubId",
            table: "Transfers");

        migrationBuilder.DropForeignKey(
            name: "FK_Transfers_Persons_PersonId",
            table: "Transfers");

        migrationBuilder.DropForeignKey(
            name: "FK_Transfers_Seasons_SeasonId",
            table: "Transfers");

        migrationBuilder.DropForeignKey(
            name: "FK_UserConfigs_AspNetUsers_UserId",
            table: "UserConfigs");

        migrationBuilder.DropIndex(
            name: "IX_OpenIddictApplications_ClientId",
            table: "OpenIddictApplications");

        migrationBuilder.DropIndex(
            name: "UserNameIndex",
            table: "AspNetUsers");

        migrationBuilder.DropIndex(
            name: "RoleNameIndex",
            table: "AspNetRoles");

        migrationBuilder.AddColumn<string>(
            name: "Ciphertext",
            table: "OpenIddictTokens",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<DateTimeOffset>(
            name: "End",
            table: "OpenIddictTokens",
            type: "datetimeoffset",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Hash",
            table: "OpenIddictTokens",
            type: "nvarchar(450)",
            nullable: true);

        migrationBuilder.AddColumn<DateTimeOffset>(
            name: "Start",
            table: "OpenIddictTokens",
            type: "datetimeoffset",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Status",
            table: "OpenIddictTokens",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Status",
            table: "OpenIddictAuthorizations",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<bool>(
            name: "Home",
            table: "MatchEvents",
            type: "bit",
            nullable: false,
            defaultValue: false);

        migrationBuilder.CreateIndex(
            name: "IX_OpenIddictTokens_Hash",
            table: "OpenIddictTokens",
            column: "Hash",
            unique: true,
            filter: "[Hash] IS NOT NULL");

        migrationBuilder.CreateIndex(
            name: "IX_OpenIddictApplications_ClientId",
            table: "OpenIddictApplications",
            column: "ClientId",
            unique: true,
            filter: "[ClientId] IS NOT NULL");

        migrationBuilder.CreateIndex(
            name: "UserNameIndex",
            table: "AspNetUsers",
            column: "NormalizedUserName",
            unique: true,
            filter: "[NormalizedUserName] IS NOT NULL");

        migrationBuilder.CreateIndex(
            name: "RoleNameIndex",
            table: "AspNetRoles",
            column: "NormalizedName",
            unique: true,
            filter: "[NormalizedName] IS NOT NULL");

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
            table: "AspNetRoleClaims",
            column: "RoleId",
            principalTable: "AspNetRoles",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetUserClaims_AspNetUsers_UserId",
            table: "AspNetUserClaims",
            column: "UserId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetUserLogins_AspNetUsers_UserId",
            table: "AspNetUserLogins",
            column: "UserId",
            principalTable: "AspNetUsers",
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
            name: "FK_AspNetUsers_RoleGroups_RoleGroupId",
            table: "AspNetUsers",
            column: "RoleGroupId",
            principalTable: "RoleGroups",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetUserTokens_AspNetUsers_UserId",
            table: "AspNetUserTokens",
            column: "UserId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_ChatMessages_AspNetUsers_AuthorId",
            table: "ChatMessages",
            column: "AuthorId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Clubs_Stadiums_StadiumId",
            table: "Clubs",
            column: "StadiumId",
            principalTable: "Stadiums",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_CommentVotes_MaterialComments_CommentId",
            table: "CommentVotes",
            column: "CommentId",
            principalTable: "MaterialComments",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_CommentVotes_AspNetUsers_UserId",
            table: "CommentVotes",
            column: "UserId",
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
            name: "FK_ForumMessages_ForumThemes_ThemeId",
            table: "ForumMessages",
            column: "ThemeId",
            principalTable: "ForumThemes",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_ForumSubsections_ForumSections_SectionId",
            table: "ForumSubsections",
            column: "SectionId",
            principalTable: "ForumSections",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

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
            name: "FK_ForumThemes_ForumSubsections_SubsectionId",
            table: "ForumThemes",
            column: "SubsectionId",
            principalTable: "ForumSubsections",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Injuries_Persons_PersonId",
            table: "Injuries",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Loans_Clubs_ClubId",
            table: "Loans",
            column: "ClubId",
            principalTable: "Clubs",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Loans_Persons_PersonId",
            table: "Loans",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Matches_Clubs_ClubId",
            table: "Matches",
            column: "ClubId",
            principalTable: "Clubs",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Matches_Seasons_SeasonId",
            table: "Matches",
            column: "SeasonId",
            principalTable: "Seasons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Matches_Stadiums_StadiumId",
            table: "Matches",
            column: "StadiumId",
            principalTable: "Stadiums",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_MatchEvents_Matches_MatchId",
            table: "MatchEvents",
            column: "MatchId",
            principalTable: "Matches",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_MatchEvents_Persons_PersonId",
            table: "MatchEvents",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_MatchEvents_Seasons_SeasonId",
            table: "MatchEvents",
            column: "SeasonId",
            principalTable: "Seasons",
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
            name: "FK_MaterialComments_MaterialComments_ParentId",
            table: "MaterialComments",
            column: "ParentId",
            principalTable: "MaterialComments",
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
            name: "FK_Materials_MaterialCategories_CategoryId",
            table: "Materials",
            column: "CategoryId",
            principalTable: "MaterialCategories",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_OpenIddictAuthorizations_OpenIddictApplications_ApplicationId",
            table: "OpenIddictAuthorizations",
            column: "ApplicationId",
            principalTable: "OpenIddictApplications",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictApplications_ApplicationId",
            table: "OpenIddictTokens",
            column: "ApplicationId",
            principalTable: "OpenIddictApplications",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId",
            table: "OpenIddictTokens",
            column: "AuthorizationId",
            principalTable: "OpenIddictAuthorizations",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_ReceiverId",
            table: "PrivateMessages",
            column: "ReceiverId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_SenderId",
            table: "PrivateMessages",
            column: "SenderId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_RoleRoleGroups_RoleGroups_RoleGroupId",
            table: "RoleRoleGroups",
            column: "RoleGroupId",
            principalTable: "RoleGroups",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_RoleRoleGroups_AspNetRoles_RoleId",
            table: "RoleRoleGroups",
            column: "RoleId",
            principalTable: "AspNetRoles",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Transfers_Clubs_ClubId",
            table: "Transfers",
            column: "ClubId",
            principalTable: "Clubs",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Transfers_Persons_PersonId",
            table: "Transfers",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Transfers_Seasons_SeasonId",
            table: "Transfers",
            column: "SeasonId",
            principalTable: "Seasons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_UserConfigs_AspNetUsers_UserId",
            table: "UserConfigs",
            column: "UserId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
            table: "AspNetRoleClaims");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserClaims_AspNetUsers_UserId",
            table: "AspNetUserClaims");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserLogins_AspNetUsers_UserId",
            table: "AspNetUserLogins");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
            table: "AspNetUserRoles");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserRoles_AspNetUsers_UserId",
            table: "AspNetUserRoles");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUsers_RoleGroups_RoleGroupId",
            table: "AspNetUsers");

        migrationBuilder.DropForeignKey(
            name: "FK_AspNetUserTokens_AspNetUsers_UserId",
            table: "AspNetUserTokens");

        migrationBuilder.DropForeignKey(
            name: "FK_ChatMessages_AspNetUsers_AuthorId",
            table: "ChatMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_Clubs_Stadiums_StadiumId",
            table: "Clubs");

        migrationBuilder.DropForeignKey(
            name: "FK_CommentVotes_MaterialComments_CommentId",
            table: "CommentVotes");

        migrationBuilder.DropForeignKey(
            name: "FK_CommentVotes_AspNetUsers_UserId",
            table: "CommentVotes");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumMessages_AspNetUsers_AuthorId",
            table: "ForumMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumMessages_ForumThemes_ThemeId",
            table: "ForumMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumSubsections_ForumSections_SectionId",
            table: "ForumSubsections");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumThemes_AspNetUsers_AuthorId",
            table: "ForumThemes");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumThemes_AspNetUsers_LastAnswerUserId",
            table: "ForumThemes");

        migrationBuilder.DropForeignKey(
            name: "FK_ForumThemes_ForumSubsections_SubsectionId",
            table: "ForumThemes");

        migrationBuilder.DropForeignKey(
            name: "FK_Injuries_Persons_PersonId",
            table: "Injuries");

        migrationBuilder.DropForeignKey(
            name: "FK_Loans_Clubs_ClubId",
            table: "Loans");

        migrationBuilder.DropForeignKey(
            name: "FK_Loans_Persons_PersonId",
            table: "Loans");

        migrationBuilder.DropForeignKey(
            name: "FK_Matches_Clubs_ClubId",
            table: "Matches");

        migrationBuilder.DropForeignKey(
            name: "FK_Matches_Seasons_SeasonId",
            table: "Matches");

        migrationBuilder.DropForeignKey(
            name: "FK_Matches_Stadiums_StadiumId",
            table: "Matches");

        migrationBuilder.DropForeignKey(
            name: "FK_MatchEvents_Matches_MatchId",
            table: "MatchEvents");

        migrationBuilder.DropForeignKey(
            name: "FK_MatchEvents_Persons_PersonId",
            table: "MatchEvents");

        migrationBuilder.DropForeignKey(
            name: "FK_MatchEvents_Seasons_SeasonId",
            table: "MatchEvents");

        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_AspNetUsers_AuthorId",
            table: "MaterialComments");

        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_Materials_MaterialId",
            table: "MaterialComments");

        migrationBuilder.DropForeignKey(
            name: "FK_MaterialComments_MaterialComments_ParentId",
            table: "MaterialComments");

        migrationBuilder.DropForeignKey(
            name: "FK_Materials_AspNetUsers_AuthorId",
            table: "Materials");

        migrationBuilder.DropForeignKey(
            name: "FK_Materials_MaterialCategories_CategoryId",
            table: "Materials");

        migrationBuilder.DropForeignKey(
            name: "FK_OpenIddictAuthorizations_OpenIddictApplications_ApplicationId",
            table: "OpenIddictAuthorizations");

        migrationBuilder.DropForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictApplications_ApplicationId",
            table: "OpenIddictTokens");

        migrationBuilder.DropForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId",
            table: "OpenIddictTokens");

        migrationBuilder.DropForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_ReceiverId",
            table: "PrivateMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_SenderId",
            table: "PrivateMessages");

        migrationBuilder.DropForeignKey(
            name: "FK_RoleRoleGroups_RoleGroups_RoleGroupId",
            table: "RoleRoleGroups");

        migrationBuilder.DropForeignKey(
            name: "FK_RoleRoleGroups_AspNetRoles_RoleId",
            table: "RoleRoleGroups");

        migrationBuilder.DropForeignKey(
            name: "FK_Transfers_Clubs_ClubId",
            table: "Transfers");

        migrationBuilder.DropForeignKey(
            name: "FK_Transfers_Persons_PersonId",
            table: "Transfers");

        migrationBuilder.DropForeignKey(
            name: "FK_Transfers_Seasons_SeasonId",
            table: "Transfers");

        migrationBuilder.DropForeignKey(
            name: "FK_UserConfigs_AspNetUsers_UserId",
            table: "UserConfigs");

        migrationBuilder.DropIndex(
            name: "IX_OpenIddictTokens_Hash",
            table: "OpenIddictTokens");

        migrationBuilder.DropIndex(
            name: "IX_OpenIddictApplications_ClientId",
            table: "OpenIddictApplications");

        migrationBuilder.DropIndex(
            name: "UserNameIndex",
            table: "AspNetUsers");

        migrationBuilder.DropIndex(
            name: "RoleNameIndex",
            table: "AspNetRoles");

        migrationBuilder.DropColumn(
            name: "Ciphertext",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "End",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "Hash",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "Start",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "Status",
            table: "OpenIddictTokens");

        migrationBuilder.DropColumn(
            name: "Status",
            table: "OpenIddictAuthorizations");

        migrationBuilder.DropColumn(
            name: "Home",
            table: "MatchEvents");

        migrationBuilder.CreateIndex(
            name: "IX_OpenIddictApplications_ClientId",
            table: "OpenIddictApplications",
            column: "ClientId",
            unique: true);

        migrationBuilder.CreateIndex(
            name: "UserNameIndex",
            table: "AspNetUsers",
            column: "NormalizedUserName",
            unique: true);

        migrationBuilder.CreateIndex(
            name: "RoleNameIndex",
            table: "AspNetRoles",
            column: "NormalizedName",
            unique: true);

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
            table: "AspNetRoleClaims",
            column: "RoleId",
            principalTable: "AspNetRoles",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetUserClaims_AspNetUsers_UserId",
            table: "AspNetUserClaims",
            column: "UserId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_AspNetUserLogins_AspNetUsers_UserId",
            table: "AspNetUserLogins",
            column: "UserId",
            principalTable: "AspNetUsers",
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
            name: "FK_AspNetUsers_RoleGroups_RoleGroupId",
            table: "AspNetUsers",
            column: "RoleGroupId",
            principalTable: "RoleGroups",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_ChatMessages_AspNetUsers_AuthorId",
            table: "ChatMessages",
            column: "AuthorId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Clubs_Stadiums_StadiumId",
            table: "Clubs",
            column: "StadiumId",
            principalTable: "Stadiums",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_CommentVotes_MaterialComments_CommentId",
            table: "CommentVotes",
            column: "CommentId",
            principalTable: "MaterialComments",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_CommentVotes_AspNetUsers_UserId",
            table: "CommentVotes",
            column: "UserId",
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
            name: "FK_ForumMessages_ForumThemes_ThemeId",
            table: "ForumMessages",
            column: "ThemeId",
            principalTable: "ForumThemes",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_ForumSubsections_ForumSections_SectionId",
            table: "ForumSubsections",
            column: "SectionId",
            principalTable: "ForumSections",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

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
            name: "FK_ForumThemes_ForumSubsections_SubsectionId",
            table: "ForumThemes",
            column: "SubsectionId",
            principalTable: "ForumSubsections",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Injuries_Persons_PersonId",
            table: "Injuries",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Loans_Clubs_ClubId",
            table: "Loans",
            column: "ClubId",
            principalTable: "Clubs",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Loans_Persons_PersonId",
            table: "Loans",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Matches_Clubs_ClubId",
            table: "Matches",
            column: "ClubId",
            principalTable: "Clubs",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Matches_Seasons_SeasonId",
            table: "Matches",
            column: "SeasonId",
            principalTable: "Seasons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Matches_Stadiums_StadiumId",
            table: "Matches",
            column: "StadiumId",
            principalTable: "Stadiums",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_MatchEvents_Matches_MatchId",
            table: "MatchEvents",
            column: "MatchId",
            principalTable: "Matches",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_MatchEvents_Persons_PersonId",
            table: "MatchEvents",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_MatchEvents_Seasons_SeasonId",
            table: "MatchEvents",
            column: "SeasonId",
            principalTable: "Seasons",
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
            name: "FK_MaterialComments_MaterialComments_ParentId",
            table: "MaterialComments",
            column: "ParentId",
            principalTable: "MaterialComments",
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
            name: "FK_Materials_MaterialCategories_CategoryId",
            table: "Materials",
            column: "CategoryId",
            principalTable: "MaterialCategories",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_OpenIddictAuthorizations_OpenIddictApplications_ApplicationId",
            table: "OpenIddictAuthorizations",
            column: "ApplicationId",
            principalTable: "OpenIddictApplications",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictApplications_ApplicationId",
            table: "OpenIddictTokens",
            column: "ApplicationId",
            principalTable: "OpenIddictApplications",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId",
            table: "OpenIddictTokens",
            column: "AuthorizationId",
            principalTable: "OpenIddictAuthorizations",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_ReceiverId",
            table: "PrivateMessages",
            column: "ReceiverId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_PrivateMessages_AspNetUsers_SenderId",
            table: "PrivateMessages",
            column: "SenderId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_RoleRoleGroups_RoleGroups_RoleGroupId",
            table: "RoleRoleGroups",
            column: "RoleGroupId",
            principalTable: "RoleGroups",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_RoleRoleGroups_AspNetRoles_RoleId",
            table: "RoleRoleGroups",
            column: "RoleId",
            principalTable: "AspNetRoles",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Transfers_Clubs_ClubId",
            table: "Transfers",
            column: "ClubId",
            principalTable: "Clubs",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Transfers_Persons_PersonId",
            table: "Transfers",
            column: "PersonId",
            principalTable: "Persons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_Transfers_Seasons_SeasonId",
            table: "Transfers",
            column: "SeasonId",
            principalTable: "Seasons",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);

        migrationBuilder.AddForeignKey(
            name: "FK_UserConfigs_AspNetUsers_UserId",
            table: "UserConfigs",
            column: "UserId",
            principalTable: "AspNetUsers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }
}
