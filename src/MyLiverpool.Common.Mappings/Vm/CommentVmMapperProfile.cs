using AutoMapper;
using MyLfc.Business.ViewModels;
using MyLiverpool.Business.Dto;

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
            CreateMap<CommentDto, CommentVm>();
        }
    }
}
