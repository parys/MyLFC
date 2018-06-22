﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers
{
    public class MaterialsController : Controller
    {
        private readonly IMaterialService _materialService;
        private readonly IMemoryCache _cache;

        public MaterialsController(IMaterialService materialService, IMemoryCache cache)
        {
            _materialService = materialService;
            _cache = cache;
        }

        public async Task<IActionResult> Index(int page = 1, int? categoryId = null, MaterialType type = MaterialType.Both, int? userId = null)
        {
            var filters = new MaterialFiltersDto
            {
                Page = page,
                MaterialType = type,
                IsInNewsmakerRole = false,
                CategoryId = categoryId,
                UserId = userId
            };
            var result = await _materialService.GetDtoAllAsync(filters);
            return View(result);
        }
    }
}