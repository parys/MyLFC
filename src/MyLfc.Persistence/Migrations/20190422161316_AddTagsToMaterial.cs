﻿using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

namespace MyLfc.Data.ResourceAccess.Migrations;

[ExcludeFromCodeCoverage]
public partial class AddTagsToMaterial : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "Tags",
            table: "Materials",
            nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Tags",
            table: "Materials");
    }
}
