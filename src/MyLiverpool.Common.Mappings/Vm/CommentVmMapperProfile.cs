using AutoMapper;
using MyLfc.Application.Comments;
using MyLfc.Business.ViewModels;

namespace MyLiverpool.Common.Mappings.Vm
{
    public class CommentVmMapperProfile : Profile
    {
        public CommentVmMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<GetCommentListByEntityIdQuery.CommentForEntityDto, CommentVm>();
        }
    }
}
