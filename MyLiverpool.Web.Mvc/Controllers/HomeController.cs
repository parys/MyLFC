﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Home controller.
    /// </summary>
    [AllowAnonymous]
    public class HomeController : Controller
    {
        private readonly IMaterialService _materialService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="materialService"></param>
        public HomeController(IMaterialService materialService)
        {
            _materialService = materialService;
        }

        /// <summary>
        /// Returns index wiew with prerended view.
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> Index(int page = 1, int? categoryId = null)
        {
            var filters = new MaterialFiltersDto
            {
                Page = page,
                MaterialType = MaterialType.Both,
                IsInNewsmakerRole = false,
                CategoryId = categoryId
            };
            var result = await _materialService.GetDtoAllAsync(filters);
            return View(result);
        }

        [HttpGet("About")]
        public IActionResult About()
        {
            return View();
        }

        [HttpGet("Copyright")]
        public IActionResult Copyright()
        {
            return View();
        }

        [HttpGet("ClubHistory")]
        public IActionResult ClubHistory()
        {
            return View();
        }

        [HttpGet("AboutClub")]
        public IActionResult AboutClub()
        {
            return View();
        }

        [HttpGet("Rules")]
        public IActionResult Rules()
        {
            return View();
        }

        [HttpGet("Cooperation")]
        public IActionResult Cooperation()
        {
            return View();
        }
    }
}