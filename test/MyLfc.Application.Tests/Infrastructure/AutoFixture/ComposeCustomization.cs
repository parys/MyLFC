using System;
using AutoFixture;
using AutoFixture.Dsl;
using AutoFixture.Kernel;

namespace MyLfc.Application.Tests.Infrastructure.AutoFixture
{
    public class ComposeCustomization<T> : ICustomization
    {
        private readonly Func<ICustomizationComposer<T>, ISpecimenBuilder> _composerTransformation;

        public ComposeCustomization(Func<ICustomizationComposer<T>, ISpecimenBuilder> composerTransformation)
        {
            _composerTransformation = composerTransformation;
        }

        public void Customize(IFixture fixture)
        {
            fixture.Customize(_composerTransformation);
        }
    }
}
