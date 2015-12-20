﻿using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace MyLiverpoolSite.Data.Entities
{
    public class User :  IdentityUser<int, UserLogin, UserRole, UserClaim>, IEntity
    {
        public User()
        {
            this.ForumMessages = new HashSet<ForumMessage>();
            this.NewsComments = new HashSet<NewsComment>();
            this.BlogItems = new HashSet<BlogItem>();
            this.NewsItems = new HashSet<NewsItem>();
            this.SentPrivateMessages = new HashSet<PrivateMessage>();
            this.ReceivedPrivateMessages = new HashSet<PrivateMessage>();
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<User, int> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }

        // public int Id { get; set; }
        // public string Email { get; set; }
        // public bool EmailConfirmed { get; set; }
        // public string PasswordHash { get; set; }
        // public string SecurityStamp { get; set; }
        // public string PhoneNumber { get; set; }
        // public bool PhoneNumberConfirmed { get; set; }
        // public bool TwoFactorEnabled { get; set; }
        // public DateTime? LockoutEnd { get; set; }
        // public bool LockoutEnabled { get; set; }
        // public int AccessFailedCount { get; set; }
        // public string UserName { get; set; }
        // public string ConcurrencyStamp { get; set; }
        // public string NormalizedEmail { get; set; }
        // public string NormalizedUserName { get; set; }

        // public virtual ICollection<UserClaim> Claims { get; set; }
        // public virtual ICollection<UserLogin> Logins { get; set; }
        // public virtual ICollection<Role> Roles { get; set; }



        //// public int Id { get; set; }

        public int OldId { get; set; }

      //  public string Login { get; set; }

     //   public string Password { get; set; }

        public string PhotoPath { get; set; }

        public string FullName { get; set; }

        public bool Gender { get; set; }

        // public string Email { get; set; }

        public string Homepage { get; set; }

        public string Skype { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public DateTime RegistrationDate { get; set; }

        public string Ip { get; set; }

        public DateTime? Birthday { get; set; }

        public bool Verify { get; set; }

        public DateTime LastModified { get; set; }

        public string Title { get; set; }

        public virtual ICollection<ForumMessage> ForumMessages { get; set; }

        public virtual ICollection<NewsComment> NewsComments { get; set; }
        public virtual ICollection<BlogComment> BlogComments { get; set; }

        public virtual ICollection<BlogItem> BlogItems { get; set; }

        public virtual ICollection<NewsItem> NewsItems { get; set; }

        public virtual ICollection<PrivateMessage> SentPrivateMessages { get; set; }
        public virtual ICollection<PrivateMessage> ReceivedPrivateMessages { get; set; }

        public virtual RoleGroup RoleGroup { get; set; }

        public int RoleGroupId { get; set; }

        //  public int Id { get; set; }
    }
}
