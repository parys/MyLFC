using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domains;

public class MaterialCustomization : ICustomization
{
    private MaterialType Type { get; }
    private bool Deleted { get; }

    public MaterialCustomization(MaterialType type, bool deleted = false)
    {
        Type = type;
        Deleted = deleted;
    }

    public void Customize(IFixture fixture)
    {
        fixture.Customizations.Add(new IgnoreMembers(new[]
        {
            nameof(Domain.Material.Author),
            nameof(Domain.Material.Category),
            nameof(Domain.Material.Comments),
        }));

        fixture.Customize<Domain.Material>(
            o => o.With(p => p.Pending, false)
                .With(x => x.Deleted, Deleted)
                .With(x => x.Id, 0)
                .With(x => x.Type, Type));
    }
}
