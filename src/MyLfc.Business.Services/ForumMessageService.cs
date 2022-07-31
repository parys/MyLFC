using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application;
using MyLfc.Domain;
using MyLfc.Business.Contracts;
using MyLfc.Business.Dto;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Business.Services;

public class ForumMessageService : IForumMessageService
{
    private readonly ILiverpoolContext _context;
    private readonly IMapper _mapper;

    public ForumMessageService(ILiverpoolContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<ForumMessageDto> CreateAsync(ForumMessageDto dto)
    {
        var model = _mapper.Map<ForumMessage>(dto);
        _context.ForumMessages.Add(model);
        await _context.SaveChangesAsync();
        
        return _mapper.Map<ForumMessageDto>(model);
    }

    public async Task<ForumMessageDto> UpdateAsync(ForumMessageDto dto)
    {
        var model = await _context.ForumMessages.FirstOrDefaultAsync(x => x.Id == dto.Id);
        model.LastModifiedTime = DateTimeOffset.UtcNow;
        model.Message = dto.Message;
        _context.ForumMessages.Update(model);
        await _context.SaveChangesAsync();
        return _mapper.Map<ForumMessageDto>(model);
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var entity = await _context.ForumMessages.FirstOrDefaultAsync(x => x.Id == id);
        if (entity != null)
        {
            _context.ForumMessages.Remove(entity);
            await _context.SaveChangesAsync();
        }

        return true;
    }
}
