using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers.Components
{
    public class InjuryPanelViewComponent : ViewComponent
    {
        private readonly IInjuryService _injuryService;

        public InjuryPanelViewComponent(IInjuryService injuryService)
        {
            _injuryService = injuryService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _injuryService.GetCurrentListAsync();
            return View(result);
        }
    }
}
