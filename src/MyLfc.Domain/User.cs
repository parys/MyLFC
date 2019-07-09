using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace MyLfc.Domain
{
    public class User : IdentityUser<int>// UserLogin, UserRole, UserClaim>, IEntity
    {
        public User()
        {
            this.ForumMessages = new HashSet<ForumMessage>();
            this.Comments = new HashSet<MaterialComment>();
            this.Materials = new HashSet<Material>();
            this.SentPrivateMessages = new HashSet<PrivateMessage>();
            this.ReceivedPrivateMessages = new HashSet<PrivateMessage>();
            CommentVotes = new HashSet<CommentVote>();
        }

        public User(int id)
        {
            Id = id;
            this.ForumMessages = new HashSet<ForumMessage>();
            this.Comments = new HashSet<MaterialComment>();
            //  this.BlogItems = new HashSet<BlogItem>();
            this.Materials = new HashSet<Material>();
            this.SentPrivateMessages = new HashSet<PrivateMessage>();
            this.ReceivedPrivateMessages = new HashSet<PrivateMessage>();
            this.ChatMessages = new HashSet<ChatMessage>();
        }


        // public int Id { get; set; }
        // public string Email { get; set; }
        // public bool EmailConfirmed { get; set; }
        // public string PasswordHash { get; set; }
        // public string SecurityStamp { get; set; }
        // public string PhoneNumber { get; set; }
        // public bool PhoneNumberConfirmed { get; set; }
        // public bool TwoFactorEnabled { get; set; }
        // public DateTimeOffset? LockoutEnd { get; set; }
        // public bool LockoutEnabled { get; set; }
        // public int AccessFailedCount { get; set; }
        // public string UserName { get; set; }
        // public string ConcurrencyStamp { get; set; }
        // public string NormalizedEmail { get; set; }
        // public string NormalizedUserName { get; set; }

        //todo research and maybe remove  https://docs.microsoft.com/en-us/aspnet/core/migration/1x-to-2x/identity-2x
        public virtual ICollection<IdentityUserRole<int>> Roles { get; } = new List<IdentityUserRole<int>>();
        public virtual ICollection<IdentityUserClaim<int>> Claims { get; } = new List<IdentityUserClaim<int>>();
        public virtual ICollection<IdentityUserLogin<int>> Logins { get; } = new List<IdentityUserLogin<int>>();
        //end research

        public int OldId { get; set; }

        public string Photo { get; set; }

        public string FullName { get; set; }

        public bool Gender { get; set; }

        public string Homepage { get; set; }

        public string Skype { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public DateTimeOffset RegistrationDate { get; set; }

        public string Ip { get; set; }

        public DateTimeOffset? Birthday { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public string Title { get; set; }

        public virtual ICollection<ForumMessage> ForumMessages { get; set; }

        public virtual ICollection<MaterialComment> Comments { get; set; }

        public virtual ICollection<Material> Materials { get; set; }

        public virtual ICollection<PrivateMessage> SentPrivateMessages { get; set; }
        public virtual ICollection<PrivateMessage> ReceivedPrivateMessages { get; set; }
        public virtual ICollection<ChatMessage> ChatMessages { get; set; }
        public virtual ICollection<CommentVote> CommentVotes { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; } = new HashSet<Notification>();

        public virtual RoleGroup RoleGroup { get; set; }

        public virtual UserConfig UserConfig { get; set; }


        public int RoleGroupId { get; set; }

        [NotMapped]
        public int NewsCount { get; set; }

        [NotMapped]
        public int BlogsCount { get; set; }

        [NotMapped]
        public int CommentsCount { get; set; }
    }
}