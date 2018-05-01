using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers
{
    [Area("lite")]
    public class PersonsController : Controller
    {
        public IActionResult Squad()
        {
            return View();
        }
    }
}