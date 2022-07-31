using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application;
using MyLfc.Domain;
using MyLfc.Business.Contracts;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Business.Services;

public class ForumSectionService : IForumSectionService
{
    private readonly IMapper _mapper;
    private readonly ILiverpoolContext _context;

    public ForumSectionService(IMapper mapper, ILiverpoolContext context)
    {
        _mapper = mapper;
        _context = context;
    }

    public async Task<ForumSectionDto> CreateAsync(string name)
    {
        var foundCount = await _context.ForumSections.CountAsync(x => x.Name == name);
        if (foundCount > 0)
        {
            return null;
        }
        var model = new ForumSection { Name = name };
        _context.ForumSections.Add(model);
        await _context.SaveChangesAsync();
        var result = _mapper.Map<ForumSectionDto>(model);
        return result;
    
}

    public async Task<bool> DeleteAsync(int id)
    {
        var section = await _context.ForumSections.FirstOrDefaultAsync(x => x.Id == id);
        if (section.Subsections.Count > 0)
        {
            return false;
        }
        _context.ForumSections.Remove(section);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<ForumSectionDto> GetAsync(int id)
    {
        var section = await _context.ForumSections.FirstOrDefaultAsync(x => x.Id == id);
        return _mapper.Map<ForumSectionDto>(section);
    }

    public async Task<IEnumerable<ForumSectionDto>> GetListAsync(bool isAdmin)
    {
        Expression<Func<ForumSubsection, bool>> filter = x => true;
        if (!isAdmin)
        {
            filter = s => s.Name != "MyLfc Shop" &&
                          s.Name != "Администрация" &&
                          s.Name != "Новости" &&
                          s.Name != "Рабочие темы";
        }
        var sections = await _context
            .ForumSections
            .Select(x => new ForumSection
        {
            Id = x.Id,
            Name = x.Name,
            IdOld = x.IdOld,
            Subsections = x.Subsections.Select(y => new ForumSubsection()
            {
                Id = y.Id,
                Name = y.Name,
                ThemesCount = y.Themes.Count,
                Description = y.Description,
                IdOld = y.IdOld
            }).ToList()
        }).ToListAsync();
        sections.ForEach(x => x.Subsections = x.Subsections.AsQueryable().Where(filter).ToList());

        return _mapper.Map<IEnumerable<ForumSectionDto>>(sections);
    }
}
