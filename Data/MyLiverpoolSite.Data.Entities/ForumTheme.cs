using System;
using System.Collections.Generic;

namespace MyLiverpoolSite.Data.Entities
{
    public class ForumTheme : IEntity
    {
        public ForumTheme()
        {
            this.Messages = new HashSet<ForumMessage>();
        }

        public int Id { get; set; }

        public int IdOld { get; set; }

        public int SubsectionId { get; set; }

        public virtual ForumSubsection Subsection { get; set; }

        public bool IsPool { get; set; }

        public bool OnTop { get; set; }

        public DateTime? LastMessageAdditionTime { get; set; }

        public bool IsClosed { get; set; }

        public int Answers { get; set; }

        public int Views { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual User Author { get; set; }

        public int AuthorId { get; set; }

        public virtual User LastAnswerUser { get; set; }

        public int LastAnswerUserId { get; set; }

        public virtual ICollection<ForumMessage> Messages { get; set; }
    }
}
