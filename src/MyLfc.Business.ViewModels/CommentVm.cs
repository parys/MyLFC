using MyLiverpool.Business.Dto;

namespace MyLfc.Business.ViewModels
{
    public class CommentVm : CommentDto
    {
        public int Deep { get; set; } = 0;
    }
}