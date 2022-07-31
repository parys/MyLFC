using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application;
using MyLfc.Domain;
using MyLfc.Business.Contracts;
using MyLfc.Business.Dto;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Business.Services;

public class ForumSubsectionService : IForumSubsectionService
{
    private readonly ILiverpoolContext _context;
    private readonly IMapper _mapper;

    public ForumSubsectionService(ILiverpoolContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<ForumSubsectionDto> CreateAsync(ForumSubsectionDto dto)
    {
        var model = _mapper.Map<ForumSubsection>(dto);
        _context.ForumSubsections.Add(model);
        await _context.SaveChangesAsync();
        dto = _mapper.Map<ForumSubsectionDto>(model);
        return dto;
    }

    public Task<bool> DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<ForumSubsectionDto> UpdateAsync(ForumSubsectionDto dto)
    {
        var model = _mapper.Map<ForumSubsection>(dto);
        _context.ForumSubsections.Update(model);
        await _context.SaveChangesAsync();
        dto = _mapper.Map<ForumSubsectionDto>(model);
        return dto;
    } 

    public async Task<ForumSubsectionDto> GetAsync(int subsectionId, int page)
    {
        var subsection = await _context.ForumSubsections.Where(x => x.Id == subsectionId).Select(x =>
            new ForumSubsection
            {
                Name = x.Name,
                Id = x.Id,
                Description = x.Description,
                ThemesCount = x.Themes.Count,
                //     Themes = x.Themes.Skip((page - 1)*itemPerPage).Take(itemPerPage).ToList(),
                Section = x.Section,
                SectionId = x.SectionId,
                IdOld = x.IdOld,
                AnswersCount = x.AnswersCount,
                Views = x.Views
            }).FirstOrDefaultAsync();
            subsection.Themes = //but reuse
            // _context.ForumThemes.Include(x => x.Author).Skip((page - 1)*itemPerPage).Take(itemPerPage).ToList();
            _context.ForumThemes.Where(x => x.SubsectionId == subsectionId).Skip((page - 1) * 15).Take(15).Select(x => new ForumTheme
            {
                Id = x.Id,
                Description = x.Description,
                IdOld = x.IdOld,
                Name = x.Name,
                Answers = x.Messages.Count,
                AuthorId = x.AuthorId,
                Author = x.Author,

            }).ToList();

        var model = _mapper.Map<ForumSubsectionDto>(subsection);
   //todo     model.Themes =
    //        new PageableData<ForumThemeMiniDto>(_mapper.Map<IEnumerable<ForumThemeMiniDto>>(subsection.Themes), page,
    //            subsection.ThemesCount);
        return model;
    } 

    public async Task<ForumSubsectionDto> GetAsync(int subsectionId)
    {
        var subsection = await _context.ForumSubsections.FirstOrDefaultAsync(x => x.Id == subsectionId);
        return _mapper.Map<ForumSubsectionDto>(subsection);
    }

    public async Task<IEnumerable<ForumSubsectionMiniDto>> GetListAsync()
    {
        var subsections = await _context.ForumSubsections.ToListAsync();
        var model = _mapper.Map<IEnumerable<ForumSubsectionMiniDto>>(subsections);
        return model;
    }
}
