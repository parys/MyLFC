using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Resources;
using MyLiverpoolSite.Business.ViewModels.Users;

namespace MyLiverpool.Controllers
{
    //[Authorize]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        
        public async Task<ActionResult> Index(int page = 1)
        { 
            var result = await _userService.GetAll(page);
            return View(result);
        }

        public async Task<ActionResult> Profile(int? id)
        {
            if (!id.HasValue)
            {
                return HttpNotFound(); //todo BadRequest();
            }
            var result = await _userService.GetUserProfile(id.Value);
            if (result == null)
            {
                return HttpNotFound();
            }
            return View(result);
        }

        [Authorize]
        public async Task<ActionResult> PrivateMessages()
        {
            var model = await _userService.GetPrivateMessagesForUser(User.Identity.GetUserId<int>());
            return View(model);
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult> WriteMessage(int? receiverId, string answerTitle = null)
        {
            if (!receiverId.HasValue)
            {
                return HttpNotFound(); //todo BadRequest();
            }
            var model = await _userService.GetPrivateMessageVMAsync(receiverId.Value);
            if (!answerTitle.IsNullOrWhiteSpace())
            {
                int answerNumber = 1;
                model.Title = string.Format(UsersMessages.Annex, answerNumber) + answerTitle; //todo move it to service and add counter
            }
            return View(model);
        }

        [Authorize]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> WriteMessage(PrivateMessageVM model)
        {
            if (model == null)
            {
                return View(); //todo BadRequest();
            }
            var result = await _userService.SavePrivateMessageVMAsync(model, User.Identity.GetUserId<int>());
            return View();
        }

        public async Task<ActionResult> ReadMessage(int? id)
        {
            if (!id.HasValue)
            {
                return HttpNotFound(); //todo BadRequest();
            }
            var model = await _userService.GetPrivateMessageForReadVMAsync(id.Value, User.Identity.GetUserId<int>());
            return View(model);
        }
    }
}