﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyLfc.Domain
{
    public class ForumSubsection : IEntity
    {
        public int Id { get; set; }

        public int IdOld { get; set; }

        public int SectionId { get; set; }

        public ForumSection Section { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        [NotMapped]
        public int ThemesCount { get; set; }

        public int AnswersCount { get; set; }

        public int Views { get; set; }

        public ICollection<ForumTheme> Themes { get; set; } = new HashSet<ForumTheme>();

        //  public long LastMessageAdditionTime { get; set; }


        //public bool IsPool { get; set; }

        // public bool OnTop { get; set; }

        //   public string LastPost { get; set; }
    }
}
