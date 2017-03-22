namespace MyLiverpool.Business.DtoNext
{
    public class SeasonDto : IDto
    {
        public int Id { get; set; }

        public int StartSeasonYear { get; set; }

        public int EndSeasonYear => StartSeasonYear + 1;
    }
}
