using MyLfc.Application.Comments;

namespace MyLiverpool.Common.Mappings.Vm
{
    public class CommentVm : GetCommentListByEntityIdQuery.CommentForEntityDto
    {
        public int Deep { get; set; } = 0;
    }
}