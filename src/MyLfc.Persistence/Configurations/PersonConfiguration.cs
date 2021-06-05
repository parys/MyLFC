using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class PersonConfiguration : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> builder)
        {
            builder.ToTable("Persons");

            builder.Property(x => x.Country).HasMaxLength(50);

            builder.Property(x => x.FirstName).HasMaxLength(35);
            builder.Property(x => x.LastName).HasMaxLength(35);

            builder.Property(x => x.FirstRussianName).HasMaxLength(35);
            builder.Property(x => x.LastRussianName).HasMaxLength(35);

            builder.Property(x => x.Nickname).HasMaxLength(20);
            builder.Property(x => x.Position).HasMaxLength(100);

            builder.Property(x => x.Photo).HasMaxLength(100);
        }
    }
}
