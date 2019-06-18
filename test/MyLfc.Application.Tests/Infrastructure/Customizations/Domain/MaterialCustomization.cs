﻿using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domain
{
    public class MaterialCustomization : ICustomization
    {
        public void Customize(IFixture fixture)
        {
            fixture.Customizations.Add(new IgnoreMembers(new[]
            {
                nameof(Material.Author),
                nameof(Material.Category),
                nameof(Material.Comments),
            }));

            fixture.Customize<Material>(
                o => o.With(p => p.Pending, false)
                    .With(x => x.Type, MaterialType.News));
        }
    }
}