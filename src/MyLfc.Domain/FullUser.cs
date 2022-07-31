using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace MyLfc.Domain;

public class FullUser : IdentityUser<int>// UserLogin, UserRole, UserClaim>, IEntity
{
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
    
    public ICollection<IdentityUserRole<int>> Roles { get; } = new HashSet<IdentityUserRole<int>>();
    public ICollection<IdentityUserClaim<int>> Claims { get; } = new HashSet<IdentityUserClaim<int>>();
    public ICollection<IdentityUserLogin<int>> Logins { get; } = new HashSet<IdentityUserLogin<int>>();
    
    public string Photo { get; set; }

    public string FullName { get; set; }

    public bool Gender { get; set; }
    
    public DateTimeOffset RegistrationDate { get; set; }

    public string Ip { get; set; }

    public DateTimeOffset? Birthday { get; set; }

    public DateTimeOffset LastModified { get; set; }

    public ICollection<ForumMessage> ForumMessages { get; set; } = new HashSet<ForumMessage>();

    public ICollection<Comment> Comments { get; set; } = new HashSet<Comment>();

    public ICollection<Material> Materials { get; set; } = new HashSet<Material>();

    public ICollection<PrivateMessage> SentPrivateMessages { get; set; } = new HashSet<PrivateMessage>();
    public ICollection<PrivateMessage> ReceivedPrivateMessages { get; set; } = new HashSet<PrivateMessage>();
    public ICollection<ChatMessage> ChatMessages { get; set; } = new HashSet<ChatMessage>();
    public ICollection<CommentVote> CommentVotes { get; set; } = new HashSet<CommentVote>();
    public ICollection<Notification> Notifications { get; set; } = new HashSet<Notification>();

    public RoleGroup RoleGroup { get; set; }

    public UserConfig UserConfig { get; set; }


    public int RoleGroupId { get; set; }
    
    public int NewsCount { get; set; }
    
    public int BlogsCount { get; set; }
    
    public int CommentsCount { get; set; }
}