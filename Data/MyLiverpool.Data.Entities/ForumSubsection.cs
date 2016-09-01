using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class ForumSubsection : IEntity
    {
        public ForumSubsection()
        {
            this.Themes = new HashSet<ForumTheme>();
        }

        public int Id { get; set; }

        public int IdOld { get; set; }

        public int SectionId { get; set; }

        public virtual ForumSection Section { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int ThemesCount { get; set; }

        public int AnswersCount { get; set; }

        public int Views { get; set; }

        public virtual ICollection<ForumTheme> Themes { get; set; }

        //  public long LastMessageAdditionTime { get; set; }


        //public bool IsPool { get; set; }

        // public bool OnTop { get; set; }

        //   public string LastPost { get; set; }
    }
}
