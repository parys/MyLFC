//using System;
//using System.Collections.Generic;
//using System.Web.Mvc;
//using MyLiverpoolSite.Data.Entities;

//namespace MyLiverpoolSite.Business.ViewModels.Blogs
//{
//    public class CreateEditBlogVM
//    {
//        public CreateEditBlogVM()
//        {
//            BlogCategories = new HashSet<BlogCategory>();
//        }

//        public ICollection<BlogCategory> BlogCategories { get; set; }

//        public int Id { get; set; }

//        public BlogCategory BlogCategory { get; set; }

//        public bool Pending { get; set; }

//        public bool OnTop { get; set; }

//        public bool CanCommentary { get; set; }

//        public string Title { get; set; }

//        [AllowHtml]
//        public string Brief { get; set; }

//        [AllowHtml]
//        public string Message { get; set; }

//        public string Source { get; set; }

//        public string PhotoPath { get; set; }

//        public int NewsCategoryId { get; set; }

//        public DateTime AdditionTime { get; set; }

//        public int AuthorId { get; set; }
//    }
//}
