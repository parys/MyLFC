﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace MyLiverpool.Business.Contracts
{
    public interface IUploadService
    {
        Task<IEnumerable<string>> UploadAsync(IFormFileCollection files);

        Task<string> UploadAsync(string base64File);
    }
}
