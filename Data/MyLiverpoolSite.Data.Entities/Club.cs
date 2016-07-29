namespace MyLiverpoolSite.Data.Entities
{
    public class Club : IEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string EnglishName { get; set; }

        public string Stadium { get; set; }

        public string Logo { get; set; }
    }
}
