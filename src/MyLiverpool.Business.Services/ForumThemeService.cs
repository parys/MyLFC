using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application;
using MyLfc.Domain;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Services
{
    public class ForumThemeService : IForumThemeService
    {
        private readonly ILiverpoolContext _context;
        private readonly IMapper _mapper;

        public ForumThemeService(IMapper mapper, ILiverpoolContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        //public async Task<int> AddComment(string comment, int themeId, int userId)
        //{
        //    var message = new ForumMessage()
        //    {
        //        AdditionTime = DateTime.Now,
        //        LastModifiedTime = DateTime.Now,
        //        AuthorId = userId,
        //        Message = comment,
        //        ThemeId = themeId
        //    };

        //    _unitOfWork.ForumMessageRepository.AddAsync(message);
        //    await _unitOfWork.SaveAsync();

        //    return message.Id;
        //}

        #region Dto

        public async Task<ForumThemeDto> GetAsync(int id, int page)
        {
            var theme = await _context.ForumThemes.Select(x => new ForumTheme()
            {
                Id = x.Id,
                AuthorId = x.AuthorId,
                Author = x.Author,
                Name = x.Name,
                Description = x.Description,
                // Messages = x.Messages.Skip((page - 1) * itemPerPage).Take(itemPerPage).Select(y => new ForumMessage()
                // {
                //     Id = y.Id,
                //     OldId = y.OldId,
                //     AdditionTime = y.AdditionTime,
                //     AuthorId = y.AuthorId,
                //     Author = y.Author,
                //     Message = y.Message,
                //     IsFirstMessage = y.IsFirstMessage,
                //     LastModifiedTime = y.LastModifiedTime,
                //})
                // .ToList(),
                MessagesCount = x.Messages.Count,

            }).FirstOrDefaultAsync(x => x.Id == id);
            theme.Messages =//bug return to use
                await
                    _context.ForumMessages.Where(x => x.ThemeId == id).Include(x => x.Author)
                        .Where(x => x.ThemeId == id)
                        .Skip((page - 1) * 15)
                        .Take(15)
                        .ToListAsync();
            var model = _mapper.Map<ForumThemeDto>(theme);
      //todo      model.Messages = new PageableData<ForumMessageDto>(_mapper.Map<IEnumerable<ForumMessageDto>>(theme.Messages), page, theme.MessagesCount);
            return model;
        }

        public async Task<ForumThemeDto> GetAsync(int id)
        {
            var theme = await _context.ForumThemes.FirstOrDefaultAsync(x => x.Id == id);
            var model = _mapper.Map<ForumThemeDto>(theme);
            return model;
        }

        public async Task<ForumThemeDto> CreateAsync(ForumThemeDto dto)
        {
           var model = _mapper.Map<ForumTheme>(dto);

            model.LastMessageAdditionTime = DateTimeOffset.UtcNow;;
            model.LastAnswerUserId = model.AuthorId;
         
            _context.ForumThemes.Add(model);
            await _context.SaveChangesAsync();

            return _mapper.Map<ForumThemeDto>(model);
        }

        public async Task<ForumThemeDto> UpdateAsync(ForumThemeDto dto)
        {
            var theme = await _context.ForumThemes.FirstOrDefaultAsync(x => x.Id == dto.Id);
            if (theme == null)
            {
                return null;
            }
            var model = _mapper.Map<ForumTheme>(dto);
            theme.Name = model.Name;
            theme.SubsectionId = model.SubsectionId;
            theme.Description = model.Description;
            _context.ForumThemes.Update(theme);
            await _context.SaveChangesAsync();

            return _mapper.Map<ForumThemeDto>(theme);
        }

        #endregion
    }
}
