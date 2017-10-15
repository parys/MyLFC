using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Business.ViewModels;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers.Components
{
    public class CommentDetailViewComponent : ViewComponent
    {
        private readonly IMapper _mapper;

        public CommentDetailViewComponent(IMapper mapper)
        {
            _mapper = mapper;
        }

        public IViewComponentResult Invoke(CommentDto comment, int deep = 0)
        {
            var com = _mapper.Map<CommentVm>(comment);
            com.Deep = deep;
            return View(com);
        }
    }
}
