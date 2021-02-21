﻿using System.Linq;
using AutoMapper;
using MyLfc.Application.MaterialCategories;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class MaterialCategoryProfile : Profile
    {
        public MaterialCategoryProfile()
        {
            CreateMap<MaterialCategory, GetMaterialCategoryDetailQuery.Response>();

            CreateMap<MaterialCategory, GetMaterialCategoryListQuery.MaterialCategoryListDto>()
                .ForMember(dest => dest.ItemsCount, src => src.MapFrom(x => x.Materials.Count()));
            
            CreateMap<CreateMaterialCategoryCommand.Request, MaterialCategory>()
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
                ;

            CreateMap<UpdateMaterialCategoryCommand.Request, MaterialCategory>()
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
                ;
        }
    }
}
