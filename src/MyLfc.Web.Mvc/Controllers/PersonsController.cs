using Microsoft.AspNetCore.Mvc;

namespace MyLfc.Web.Mvc.Controllers
{
    public class PersonsController : Controller
    {
        public IActionResult Squad()
        {
            return View();
        }
    }
}