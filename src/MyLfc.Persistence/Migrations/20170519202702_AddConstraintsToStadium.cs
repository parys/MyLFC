using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    public partial class AddConstraintsToStadium : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //add temp stadium if not exists
            migrationBuilder.Sql(@"  SET IDENTITY_INSERT Stadiums ON
 IF NOT EXISTS(SELECT 1 FROM Stadiums WHERE Stadiums.Id = 1)
 BEGIN
    INSERT INTO Stadiums (Id, Name, City) VALUES (1, 'temp', 'temp')
	 UPDATE Clubs
	 SET StadiumId = 1
	 WHERE 1=1;
	 UPDATE Matches
	 SET StadiumId = 1
	 WHERE 1=1;
END 
SET IDENTITY_INSERT Stadiums OFF
");
            migrationBuilder.AddForeignKey(
                name: "FK_Clubs_Stadium_StadiumId",
                table: "Clubs",
                column: "StadiumId",
                principalTable: "Stadiums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Matches_Stadium_StadiumId",
                table: "Matches",
                column: "StadiumId",
                principalTable: "Stadiums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Clubs_Stadium_StadiumId",
                table: "Clubs");

            migrationBuilder.DropForeignKey(
                name: "FK_Matches_Stadium_StadiumId",
                table: "Matches");
        }
    }
}
