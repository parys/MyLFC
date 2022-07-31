﻿using AutoMapper;
using MyLfc.Domain;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Common.Mappings;

public class ForumSectionMapperProfile : Profile
{
    public ForumSectionMapperProfile()
    {
        RegisterForumSectionMapping();
    }
    
    private void RegisterForumSectionMapping()
    {
        CreateMap<ForumSection, ForumSectionDto>()
            .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
            .ForMember(dest => dest.Subsections, src => src.MapFrom(x => x.Subsections));

        CreateMap<ForumSectionDto, ForumSection>()
            .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name));
    }
}
