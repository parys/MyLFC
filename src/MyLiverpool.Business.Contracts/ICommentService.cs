using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface ICommentService
    {
        Task<CommentDto> AddAsync(CommentDto model);

        Task<bool> UpdateAsync(CommentDto model);
        
        Task<bool> UpdateVoteAsync(CommentVoteDto dto);

        Task<IEnumerable<CommentDto>> GetLastListAsync();
        
        Task<int> CountAsync(Expression<Func<MaterialComment, bool>> filter = null);
    }
}
