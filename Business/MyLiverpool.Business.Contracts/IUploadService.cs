using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace MyLiverpool.Business.Contracts
{
    public interface IUploadService
    {
        Task<string> UpdateAvatarAsync(int userId, IFormFile file);

        Task<string> UpdateLogoAsync(int? clubId, IFormFile file);

        Task<string> UpdateLogoAsync(string clubName, IFormFile file);

        Task<IEnumerable<string>> UploadAsync(IFormFileCollection files);

        Task<string> UploadAsync(string base64File);

        Task<string> UpdatePersonPhotoAsync(string name, IFormFile file);
    }
}
