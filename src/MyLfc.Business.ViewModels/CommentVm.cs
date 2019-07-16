using MyLfc.Application.Comments;

namespace MyLfc.Business.ViewModels
{
    public class CommentVm : GetCommentListByEntityIdQuery.CommentForEntityDto
    {
        public int Deep { get; set; } = 0;
    }
}