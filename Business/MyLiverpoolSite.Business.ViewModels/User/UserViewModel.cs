using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyLiverpoolSite.Business.ViewModels.User
{
    public class UserViewModel
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string FullName { get; set; }

        public bool? Gender { get; set; }

        public string Email { get; set; }

        public string Homepage { get; set; }

        public string Skype { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public long RegistrationDateUTC { get; set; }
    }
}
