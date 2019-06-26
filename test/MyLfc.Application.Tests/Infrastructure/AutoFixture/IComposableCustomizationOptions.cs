using System.Collections.Generic;
using AutoFixture;

namespace MyLfc.Application.Tests.Infrastructure.AutoFixture
{
    public interface IComposableCustomizationOptions
    {
        IList<ICustomization> Customizations { get; }

        IFixture Compose();
    }
}
