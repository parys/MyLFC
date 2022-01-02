using AutoMapper;
using MyLfc.Application.Comments.Queries;

namespace MyLfc.Common.Mappings.Vm
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
