using System;
using System.Collections.Generic;
using Xamarin.Forms;

namespace MyLiverpool.Mobile
{
    public partial class MasterPage : ContentPage
    {
        public ListView ListView => listView;

        public MasterPage()
        {
            InitializeComponent();
            Title = "master page";
            var masterPageItems = new List<MasterPageItem>
            {
                new MasterPageItem
                {
                    Title = "Контакты",
                    IconSource = "contacts.png",
                    TargetType = typeof(ContactsPage)
                },
                new MasterPageItem
                {
                    Title = "Правила",
                    IconSource = "reminders.png",
                    TargetType = typeof(RulesPage)
                }
            };

            listView.ItemsSource = masterPageItems;
        }
    }
}
