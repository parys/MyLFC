﻿namespace MyLfc.Business.Dto
{
    public class ForumThemeMiniDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int AuthorId { get; set; }

        public string AuthorUserName { get; set; }

        public int Answers { get; set; }
    }
}
