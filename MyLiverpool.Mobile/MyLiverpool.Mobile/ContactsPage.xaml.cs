using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;

namespace MyLiverpool.Mobile
{
    public partial class ContactsPage : ContentPage
    {
        public ContactsPage()
        {
            InitializeComponent();


        }

        protected override async void OnAppearing()
        {
            var client = new UserHttpService();
            var user = await client.GetUsers();
            userId.Text = user.Id.ToString();
            userName.Text = user.UserName.ToString();
        }
    }
}
