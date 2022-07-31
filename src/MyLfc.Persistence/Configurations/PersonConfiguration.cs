using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class PersonConfiguration : IEntityTypeConfiguration<Person>
{
    public void Configure(EntityTypeBuilder<Person> builder)
    {
        builder.ToTable("Persons");

        builder.Property(x => x.Country).HasMaxLength(Person.CountryLength);

        builder.Property(x => x.FirstName).HasMaxLength(Person.FirstNameLength);
        builder.Property(x => x.LastName).HasMaxLength(Person.LastNameLength);

        builder.Property(x => x.FirstRussianName).HasMaxLength(Person.FirstRussianNameLength);
        builder.Property(x => x.LastRussianName).HasMaxLength(Person.LastRussianNameLength);

        builder.Property(x => x.Nickname).HasMaxLength(Person.NicknameLength);
        builder.Property(x => x.Position).HasMaxLength(Person.PositionLength);

        builder.Property(x => x.Photo).HasMaxLength(Person.PhotoLength);
    }
}
