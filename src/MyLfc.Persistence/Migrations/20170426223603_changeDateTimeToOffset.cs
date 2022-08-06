using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class changeDateTimeToOffset : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "RegistrationDate",
            table: "AspNetUsers",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "LastModified",
            table: "AspNetUsers",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "Birthday",
            table: "AspNetUsers",
            nullable: true,
            oldClrType: typeof(DateTime),
            oldNullable: true);

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "SentTime",
            table: "PrivateMessages",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "Birthday",
            table: "Persons",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "LastModified",
            table: "MaterialComments",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "AdditionTime",
            table: "MaterialComments",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "LastModified",
            table: "Materials",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "AdditionTime",
            table: "Materials",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "DateTime",
            table: "Matches",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "LastMessageAdditionTime",
            table: "ForumThemes",
            nullable: true,
            oldClrType: typeof(DateTime),
            oldNullable: true);

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "LastModifiedTime",
            table: "ForumMessages",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "AdditionTime",
            table: "ForumMessages",
            nullable: false,
            oldClrType: typeof(DateTime));

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "AdditionTime",
            table: "ChatMessages",
            nullable: false,
            oldClrType: typeof(DateTime));
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AlterColumn<DateTime>(
            name: "RegistrationDate",
            table: "AspNetUsers",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "LastModified",
            table: "AspNetUsers",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "Birthday",
            table: "AspNetUsers",
            nullable: true,
            oldClrType: typeof(DateTimeOffset),
            oldNullable: true);

        migrationBuilder.AlterColumn<DateTime>(
            name: "SentTime",
            table: "PrivateMessages",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "Birthday",
            table: "Persons",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "LastModified",
            table: "MaterialComments",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "AdditionTime",
            table: "MaterialComments",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "LastModified",
            table: "Materials",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "AdditionTime",
            table: "Materials",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "DateTime",
            table: "Matches",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "LastMessageAdditionTime",
            table: "ForumThemes",
            nullable: true,
            oldClrType: typeof(DateTimeOffset),
            oldNullable: true);

        migrationBuilder.AlterColumn<DateTime>(
            name: "LastModifiedTime",
            table: "ForumMessages",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "AdditionTime",
            table: "ForumMessages",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));

        migrationBuilder.AlterColumn<DateTime>(
            name: "AdditionTime",
            table: "ChatMessages",
            nullable: false,
            oldClrType: typeof(DateTimeOffset));
    }
}
