﻿using System;
using System.Collections.Generic;
using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using MyLfc.Domain;
using MyLfc.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.Users;

[CollectionDefinition(nameof(UserQueryCollection))]
public class UserQueryCollection : ICollectionFixture<UserQueryTestFixture> { }


public class UserQueryTestFixture : BaseTestFixture
{
    public static int UserId => Users[0].Id;

    public static int MaterialCategoryId => MaterialCategories[0].Id;

    public static int MaterialWithComments => Materials[1].Id;

    public static List<FullUser> Users { get; private set; }

    public static List<Material> Materials { get; private set; }

    public static List<MaterialCategory> MaterialCategories { get; private set; }
    public static List<Comment> Comments { get; private set; }


    public UserQueryTestFixture()
    {
        RoleGroupsSeeder.Seed(Context);
        SeedUsers();
        SeedMaterialCategories();
        SeedMaterials();
        SeedComments();
    }

    private void SeedUsers()
    {
        var users = new Fixture()
            .Customize(new UserCustomization())
            .CreateMany<FullUser>(5).Select(x =>
            {
                x.RoleGroupId = RoleGroupsSeeder.DefaultRoleGroupId;
                return x;
            }).ToList();

        users.ForEach(x => x.Birthday = DateTimeOffset.UtcNow.AddDays(1));
        users[0].Birthday = DateTimeOffset.UtcNow;
        users[0].LastModified = DateTimeOffset.UtcNow;

        Context.Users.AddRange(users);
        Context.SaveChanges();

        Users = users;
    }

    private void SeedMaterials()
    {
        var materials = new Fixture()
            .Customize(new MaterialCustomization(MaterialType.News))
            .CreateMany<Material>(50).ToList();

        materials.ForEach(x => x.AuthorId = UserId);
        materials.ForEach(x => x.CategoryId = MaterialCategoryId);

        Context.Materials.AddRange(materials);
        Context.SaveChanges();

        Materials = materials;
    }

    private void SeedMaterialCategories()
    {
        var materialCategories = new Fixture()
            .Customize(new MaterialCategoryCustomization(MaterialType.News, 100))
            .CreateMany<MaterialCategory>(3).ToList();

        Context.MaterialCategories.AddRange(materialCategories);
        Context.SaveChanges();

        MaterialCategories = materialCategories;
    }

    private void SeedComments()
    {
        var comments = new Fixture()
            .Customize(new CommentCustomization())
            .CreateMany<Comment>(3).ToList();

        comments.ForEach(x => x.MaterialId = MaterialWithComments);
        comments.ForEach(x => x.AuthorId = UserId);
        comments.ForEach(x => x.Type = CommentType.News);
        Context.MaterialComments.AddRange(comments);
        Context.SaveChanges();

        Comments = comments;
    }
}
