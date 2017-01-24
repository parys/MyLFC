using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.DtoNext
{
    public class PersonDto: IDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string FirstRussianName { get; set; }
        public string LastName { get; set; }
        public string LastRussianName { get; set; }
        public PersonType Type { get; set; }
        public string Photo { get; set; }
        public string Name => $"{FirstName} {LastName}";
        public string RussianName => $"{FirstRussianName} {LastRussianName}";
    }
}
