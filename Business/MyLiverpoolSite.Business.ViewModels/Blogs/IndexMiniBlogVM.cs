//using System;
//using System.Collections.Generic;
//using System.Web.Mvc;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Business.ViewModels.Blogs
//{
//    public class IndexMiniBlogVM
//    {
//        public IndexMiniBlogVM()
//        {
//            Children = new HashSet<BlogComment>();
//        }

//        public int Id { get; set; }

//        public virtual BlogCategory BlogCategory { get; set; }

//        public bool CanCommentary { get; set; }

//        public DateTime AdditionTime { get; set; }

//        public uint NumberCommentaries { get; set; }

//        public virtual User Author { get; set; }

//        public string Title { get; set; }

//        [AllowHtml]
//        public string Brief { get; set; }

//        public int Reads { get; set; }

//        public string Source { get; set; }

//        public string PhotoPath { get; set; }

//        public DateTime LastModified { get; set; }

//        public virtual ICollection<BlogComment> Children { get; set; }
//    }
//}
