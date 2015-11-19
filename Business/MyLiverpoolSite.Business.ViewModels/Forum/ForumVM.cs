using System;
using System.Collections.Generic;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.ViewModels.Forum
{
    public class ForumVM
    {
        public ForumVM()
        {
            Sections = new HashSet<ForumSection>();
        }
        public ICollection<ForumSection> Sections { get; set; }
    }
}
