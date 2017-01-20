using MyLiverpool.Business.DtoNext;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MyLiverpool.Mobile
{
    public class UserHttpService
    {
        private readonly HttpClient _httpClient;

        public UserHttpService()
        {
            _httpClient = new HttpClient
            {
                BaseAddress = new Uri("http://mylfc.azurewebsites.net/")
            };
        }

        public async Task<UserDto> GetUsers()
        {
            var response = await _httpClient.GetAsync("api/v1/user/1");

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<UserDto>(content);
            }
            return null;
        }
    }
}
