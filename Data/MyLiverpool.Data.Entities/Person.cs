using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class Person: IEntity
    {
        public int Id { get; set; }

        public string FirstName { get; set; }
        public string FirstRussianName { get; set; }
        public string LastName { get; set; }
        public string LastRussianName { get; set; }

        public PersonType Type { get; set; }

        public string Photo { get; set; }
    }
}
