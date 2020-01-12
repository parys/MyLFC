using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Comments;
using MyLfc.Business.ViewModels;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class CommentDetailViewComponent : ViewComponent
    {
        private readonly IMapper _mapper;

        public CommentDetailViewComponent(IMapper mapper)
        {
            _mapper = mapper;
        }

        public IViewComponentResult Invoke(GetCommentListByEntityIdQuery.CommentForEntityDto comment, int deep = 0)
        {
            var com = _mapper.Map<CommentVm>(comment);
            com.Deep = deep;
            return View(com);
        }
    }
}
