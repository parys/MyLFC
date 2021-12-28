using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace MyLfc.Web.Mvc.Controllers
{
    [AllowAnonymous]
    public class BaseController : Controller
    {
        private IMediator _mediator;

        /// <summary>
        /// Returns existing or new mediator entity.
        /// </summary>
        protected IMediator Mediator => _mediator ?? (_mediator = HttpContext.RequestServices.GetService<IMediator>());
    }
}
