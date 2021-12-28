using MyLfc.Application.Comments;

namespace MyLfc.Common.Mappings.Vm
{
    public class CommentVm : GetCommentListByEntityIdQuery.CommentForEntityDto
    {
        public int Deep { get; set; } = 0;
    }
}