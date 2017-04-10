using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MyLiverpool.Data.ResourceAccess;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.ResourceAccess.Migrations
{
    [DbContext(typeof(LiverpoolContext))]
    [Migration("20170121100309_addHelperTable")]
    partial class AddHelperTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ChatMessage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AdditionTime");

                    b.Property<int>("AuthorId");

                    b.Property<string>("Ip")
                        .HasMaxLength(15);

                    b.Property<string>("Message");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.ToTable("ChatMessages");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.Club", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EnglishName");

                    b.Property<string>("Logo");

                    b.Property<string>("Name");

                    b.Property<string>("Stadium");

                    b.HasKey("Id");

                    b.ToTable("Clubs");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ForumMessage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AdditionTime");

                    b.Property<int>("AuthorId");

                    b.Property<bool>("IsFirstMessage");

                    b.Property<DateTime>("LastModifiedTime");

                    b.Property<string>("Message");

                    b.Property<int>("OldId");

                    b.Property<int>("ThemeId");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("ThemeId");

                    b.ToTable("ForumMessages");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ForumSection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("IdOld");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("ForumSections");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ForumSubsection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AnswersCount");

                    b.Property<string>("Description");

                    b.Property<int>("IdOld");

                    b.Property<string>("Name");

                    b.Property<int>("SectionId");

                    b.Property<int>("Views");

                    b.HasKey("Id");

                    b.HasIndex("SectionId");

                    b.ToTable("ForumSubsections");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ForumTheme", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Answers");

                    b.Property<int>("AuthorId");

                    b.Property<string>("Description");

                    b.Property<int>("IdOld");

                    b.Property<bool>("IsClosed");

                    b.Property<bool>("IsPool");

                    b.Property<int>("LastAnswerUserId");

                    b.Property<DateTime?>("LastMessageAdditionTime");

                    b.Property<string>("Name");

                    b.Property<bool>("OnTop");

                    b.Property<int>("SubsectionId");

                    b.Property<int>("Views");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("LastAnswerUserId");

                    b.HasIndex("SubsectionId");

                    b.ToTable("ForumThemes");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.HelpEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Type");

                    b.Property<string>("Value");

                    b.HasKey("Id");

                    b.ToTable("HelpEntities");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.Match", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ClubId");

                    b.Property<DateTime>("DateTime");

                    b.Property<bool>("IsHome");

                    b.Property<int>("MatchType");

                    b.Property<string>("Score");

                    b.HasKey("Id");

                    b.HasIndex("ClubId");

                    b.ToTable("Matches");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.Material", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AdditionTime");

                    b.Property<int>("AuthorId");

                    b.Property<string>("Brief");

                    b.Property<bool>("CanCommentary");

                    b.Property<int>("CategoryId");

                    b.Property<DateTime>("LastModified");

                    b.Property<string>("Message");

                    b.Property<int>("OldId");

                    b.Property<bool>("OnTop");

                    b.Property<bool>("Pending");

                    b.Property<string>("PhotoPath");

                    b.Property<float>("Rating");

                    b.Property<int>("RatingNumbers");

                    b.Property<int>("RatingSumm");

                    b.Property<int>("Reads");

                    b.Property<string>("Source");

                    b.Property<string>("Title");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("CategoryId");

                    b.ToTable("Materials");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.MaterialCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<int>("MaterialType");

                    b.Property<string>("Name");

                    b.Property<int>("OldId");

                    b.HasKey("Id");

                    b.ToTable("MaterialCategories");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.MaterialComment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AdditionTime");

                    b.Property<string>("Answer");

                    b.Property<int>("AuthorId");

                    b.Property<bool>("IsVerified");

                    b.Property<DateTime>("LastModified");

                    b.Property<int>("MaterialId");

                    b.Property<int>("MaterialType");

                    b.Property<string>("Message");

                    b.Property<int>("OldId");

                    b.Property<int?>("ParentId");

                    b.Property<bool>("Pending");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("MaterialId");

                    b.HasIndex("ParentId");

                    b.ToTable("MaterialComments");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.PrivateMessage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsRead");

                    b.Property<string>("Message")
                        .HasMaxLength(500);

                    b.Property<int>("ReceiverId");

                    b.Property<int>("SenderId");

                    b.Property<DateTime>("SentTime");

                    b.Property<string>("Title")
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.HasIndex("ReceiverId");

                    b.HasIndex("SenderId");

                    b.ToTable("PrivateMessages");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.RoleGroup", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("RussianName");

                    b.HasKey("Id");

                    b.ToTable("RoleGroups");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.RoleRoleGroup", b =>
                {
                    b.Property<int>("RoleId");

                    b.Property<int>("RoleGroupId");

                    b.HasKey("RoleId", "RoleGroupId");

                    b.HasIndex("RoleGroupId");

                    b.ToTable("RoleRoleGroups");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<DateTime?>("Birthday");

                    b.Property<string>("City");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Country");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FullName");

                    b.Property<bool>("Gender");

                    b.Property<string>("Homepage");

                    b.Property<string>("Ip");

                    b.Property<DateTime>("LastModified");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<int>("OldId");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("Photo");

                    b.Property<DateTime>("RegistrationDate");

                    b.Property<int>("RoleGroupId");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Skype");

                    b.Property<string>("Title");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.HasIndex("RoleGroupId");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.Wish", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Message")
                        .HasMaxLength(300);

                    b.Property<string>("Title")
                        .HasMaxLength(30);

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("Wishes");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictApplication<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClientId");

                    b.Property<string>("ClientSecret");

                    b.Property<string>("DisplayName");

                    b.Property<string>("LogoutRedirectUri");

                    b.Property<string>("RedirectUri");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.HasIndex("ClientId")
                        .IsUnique();

                    b.ToTable("OpenIddictApplications");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictAuthorization<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Scope");

                    b.HasKey("Id");

                    b.ToTable("OpenIddictAuthorizations");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictScope<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.ToTable("OpenIddictScopes");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictToken<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ApplicationId");

                    b.Property<int?>("AuthorizationId");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationId");

                    b.HasIndex("AuthorizationId");

                    b.ToTable("OpenIddictTokens");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.Role")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User")
                        .WithMany("Claims")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User")
                        .WithMany("Logins")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<int>", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId");

                    b.HasOne("MyLiverpool.Data.Entities.User")
                        .WithMany("Roles")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ChatMessage", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User", "Author")
                        .WithMany("ChatMessages")
                        .HasForeignKey("AuthorId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ForumMessage", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User", "Author")
                        .WithMany("ForumMessages")
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLiverpool.Data.Entities.ForumTheme", "Theme")
                        .WithMany("Messages")
                        .HasForeignKey("ThemeId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ForumSubsection", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.ForumSection", "Section")
                        .WithMany("Subsections")
                        .HasForeignKey("SectionId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.ForumTheme", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLiverpool.Data.Entities.User", "LastAnswerUser")
                        .WithMany()
                        .HasForeignKey("LastAnswerUserId");

                    b.HasOne("MyLiverpool.Data.Entities.ForumSubsection", "Subsection")
                        .WithMany("Themes")
                        .HasForeignKey("SubsectionId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.Match", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.Club", "Club")
                        .WithMany("Matches")
                        .HasForeignKey("ClubId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.Material", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User", "Author")
                        .WithMany("Materials")
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLiverpool.Data.Entities.MaterialCategory", "Category")
                        .WithMany("Materials")
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.MaterialComment", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User", "Author")
                        .WithMany("Comments")
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLiverpool.Data.Entities.Material", "Material")
                        .WithMany("Comments")
                        .HasForeignKey("MaterialId");

                    b.HasOne("MyLiverpool.Data.Entities.MaterialComment", "Parent")
                        .WithMany("Children")
                        .HasForeignKey("ParentId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.PrivateMessage", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.User", "Receiver")
                        .WithMany("ReceivedPrivateMessages")
                        .HasForeignKey("ReceiverId");

                    b.HasOne("MyLiverpool.Data.Entities.User", "Sender")
                        .WithMany("SentPrivateMessages")
                        .HasForeignKey("SenderId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.RoleRoleGroup", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.RoleGroup", "RoleGroup")
                        .WithMany("RoleGroups")
                        .HasForeignKey("RoleGroupId");

                    b.HasOne("MyLiverpool.Data.Entities.Role", "Role")
                        .WithMany("RoleRoleGroups")
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("MyLiverpool.Data.Entities.User", b =>
                {
                    b.HasOne("MyLiverpool.Data.Entities.RoleGroup", "RoleGroup")
                        .WithMany("Users")
                        .HasForeignKey("RoleGroupId");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictToken<int>", b =>
                {
                    b.HasOne("OpenIddict.Models.OpenIddictApplication<int>")
                        .WithMany("Tokens")
                        .HasForeignKey("ApplicationId");

                    b.HasOne("OpenIddict.Models.OpenIddictAuthorization<int>")
                        .WithMany("Tokens")
                        .HasForeignKey("AuthorizationId");
                });
        }
    }
}
