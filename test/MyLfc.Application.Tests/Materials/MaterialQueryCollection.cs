using System.Collections.Generic;
using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domain;
using MyLfc.Domain;
using MyLiverpool.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.Materials
{
    [CollectionDefinition(nameof(MaterialQueryCollection))]
    public class MaterialQueryCollection : ICollectionFixture<MaterialQueryTestFixture> { }


    public class MaterialQueryTestFixture : BaseTestFixture
    {
        public static int UserId => Users[0].Id;

        public static int MaterialCategoryId => MaterialCategories[0].Id;

        public static int MaterialWithComments => Materials[1].Id;

        public static List<User> Users { get; private set; }

        public static List<Material> Materials { get; private set; }

        public static List<MaterialCategory> MaterialCategories { get; private set; }
        public static List<MaterialComment> Comments { get; private set; }


        public MaterialQueryTestFixture() : base()
        {
            SeedUsers();
        //    SeedVisits();
            SeedMaterialCategories();
            SeedMaterials();
            SeedComments();
        //    SeedExamHistoryEntries();
        }

        private void SeedUsers()
        {
            var users = new Fixture()
                .Customize(new UserCustomization())
                .CreateMany<User>(5).ToList();
            
            Context.Users.AddRange(users);
            Context.SaveChanges();

            Users = users;
        }

        private void SeedMaterials()
        {
            var materials = new Fixture()
                .Customize(new MaterialCustomization())
                .CreateMany<Material>(50).ToList();

            materials.ForEach(x => x.AuthorId = UserId);
            materials.ForEach(x => x.CategoryId = MaterialCategoryId);
         //   materials.ForEach(x => x.Type = MaterialType.News);

            Context.Materials.AddRange(materials);
            Context.SaveChanges();

            Materials = materials;
        }

        private void SeedMaterialCategories()
        {
            var materialCategories = new Fixture()
                .Customize(new MaterialCategoryCustomization(MaterialType.News))
                .CreateMany<MaterialCategory>(3).ToList();

            Context.MaterialCategories.AddRange(materialCategories);
            Context.SaveChanges();

            MaterialCategories = materialCategories;
        }

        private void SeedComments()
        {
            var comments = new Fixture()
                .Customize(new CommentCustomization())
                .CreateMany<MaterialComment>(3).ToList();

            comments.ForEach(x => x.MaterialId = MaterialWithComments);
            comments.ForEach(x => x.AuthorId = UserId);
            comments.ForEach(x => x.Type = CommentType.News);
            Context.MaterialComments.AddRange(comments);
            Context.SaveChanges();

            Comments = comments;
        }
    }
}
