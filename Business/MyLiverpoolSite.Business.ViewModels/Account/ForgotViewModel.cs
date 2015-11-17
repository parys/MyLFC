﻿using System.ComponentModel.DataAnnotations;
using MyLiverpoolSite.Business.ViewModels.Resources;

namespace MyLiverpoolSite.Business.ViewModels.Account
{
    public class ForgotViewModel
    {
        [Required]
        [Display(ResourceType = typeof (UsersMessages), Name = "Email")]
        public string Email { get; set; }
    }
}
