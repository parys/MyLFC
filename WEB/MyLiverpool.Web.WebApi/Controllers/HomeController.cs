using System.Web.Mvc;
using MyLiverpool.Controllers;

namespace MyLiverpool.Web.WebApi.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AboutClub()
        {
            return View();
        }

        public ActionResult Rules()
        {
            return View();
        }

        //public ActionResult Contact()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}


    }
}