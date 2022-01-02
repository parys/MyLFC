using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MyLfc.Persistence;
using MyLfc.Data.ResourceAccess;
using MyLfc.Data.Common;

namespace MyLfc.Data.ResourceAccess.Migrations
{
    [DbContext(typeof(LiverpoolContext))]
    [Migration("20170723224420_AddInjuriesAndLoanTables")]
    partial class AddInjuriesAndLoanTables
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
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

            modelBuilder.Entity("MyLfc.Data.Entities.ChatMessage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset>("AdditionTime");

                    b.Property<int>("AuthorId");

                    b.Property<string>("Ip")
                        .HasMaxLength(15);

                    b.Property<string>("Message");

                    b.Property<byte>("Type");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.ToTable("ChatMessages");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Club", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EnglishName");

                    b.Property<string>("Logo");

                    b.Property<string>("Name");

                    b.Property<int>("StadiumId");

                    b.Property<string>("StadiumName");

                    b.HasKey("Id");

                    b.HasIndex("StadiumId");

                    b.ToTable("Clubs");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.CommentVote", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("CommentId");

                    b.Property<bool>("Positive");

                    b.HasKey("UserId", "CommentId");

                    b.HasIndex("CommentId");

                    b.ToTable("CommentVotes");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.ForumMessage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset>("AdditionTime");

                    b.Property<int>("AuthorId");

                    b.Property<bool>("IsFirstMessage");

                    b.Property<DateTimeOffset>("LastModifiedTime");

                    b.Property<string>("Message");

                    b.Property<int>("OldId");

                    b.Property<int>("ThemeId");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("ThemeId");

                    b.ToTable("ForumMessages");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.ForumSection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("IdOld");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("ForumSections");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.ForumSubsection", b =>
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

            modelBuilder.Entity("MyLfc.Data.Entities.ForumTheme", b =>
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

                    b.Property<DateTimeOffset?>("LastMessageAdditionTime");

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

            modelBuilder.Entity("MyLfc.Data.Entities.HelpEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Type");

                    b.Property<string>("Value");

                    b.HasKey("Id");

                    b.ToTable("HelpEntities");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Injury", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<DateTime>("EndTime");

                    b.Property<int>("PersonId");

                    b.Property<DateTime>("StartTime");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("Injuries");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Loan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Came");

                    b.Property<int>("ClubId");

                    b.Property<DateTime>("EndTime");

                    b.Property<int>("PersonId");

                    b.Property<DateTime>("StartTime");

                    b.HasKey("Id");

                    b.HasIndex("ClubId");

                    b.HasIndex("PersonId");

                    b.ToTable("Loans");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Match", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ClubId");

                    b.Property<DateTimeOffset>("DateTime");

                    b.Property<bool>("IsHome");

                    b.Property<int>("MatchType");

                    b.Property<string>("PhotoUrl");

                    b.Property<string>("ReportUrl");

                    b.Property<string>("Score");

                    b.Property<int>("SeasonId");

                    b.Property<int>("StadiumId");

                    b.Property<string>("VideoUrl");

                    b.HasKey("Id");

                    b.HasIndex("ClubId");

                    b.HasIndex("SeasonId");

                    b.HasIndex("StadiumId");

                    b.ToTable("Matches");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Material", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset>("AdditionTime");

                    b.Property<int>("AuthorId");

                    b.Property<string>("Brief");

                    b.Property<bool>("CanCommentary");

                    b.Property<int>("CategoryId");

                    b.Property<DateTimeOffset>("LastModified");

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

            modelBuilder.Entity("MyLfc.Data.Entities.MaterialCategory", b =>
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

            modelBuilder.Entity("MyLfc.Data.Entities.MaterialComment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset>("AdditionTime");

                    b.Property<string>("Answer");

                    b.Property<int>("AuthorId");

                    b.Property<bool>("IsVerified");

                    b.Property<DateTimeOffset>("LastModified");

                    b.Property<int>("MaterialId");

                    b.Property<int>("MaterialType");

                    b.Property<string>("Message");

                    b.Property<int>("OldId");

                    b.Property<int?>("OldParentId");

                    b.Property<int?>("ParentId");

                    b.Property<bool>("Pending");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("MaterialId");

                    b.HasIndex("ParentId");

                    b.ToTable("MaterialComments");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset?>("Birthday");

                    b.Property<string>("Country");

                    b.Property<string>("FirstName");

                    b.Property<string>("FirstRussianName");

                    b.Property<string>("LastName");

                    b.Property<string>("LastRussianName");

                    b.Property<byte?>("Number");

                    b.Property<string>("Photo");

                    b.Property<string>("Position");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("Persons");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.PrivateMessage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsRead");

                    b.Property<string>("Message")
                        .HasMaxLength(2500);

                    b.Property<int>("ReceiverId");

                    b.Property<int>("SenderId");

                    b.Property<DateTimeOffset>("SentTime");

                    b.Property<string>("Title")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("ReceiverId");

                    b.HasIndex("SenderId");

                    b.ToTable("PrivateMessages");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Role", b =>
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
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.RoleGroup", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("RussianName");

                    b.HasKey("Id");

                    b.ToTable("RoleGroups");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.RoleRoleGroup", b =>
                {
                    b.Property<int>("RoleId");

                    b.Property<int>("RoleGroupId");

                    b.HasKey("RoleId", "RoleGroupId");

                    b.HasIndex("RoleGroupId");

                    b.ToTable("RoleRoleGroups");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Season", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("StartSeasonYear");

                    b.HasKey("Id");

                    b.ToTable("Seasons");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Stadium", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Stadiums");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Transfer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Amount");

                    b.Property<int?>("ClubId");

                    b.Property<bool>("Coming");

                    b.Property<DateTimeOffset?>("FinishDate");

                    b.Property<bool>("OnLoan");

                    b.Property<int>("PersonId");

                    b.Property<int?>("SeasonId");

                    b.Property<DateTimeOffset>("StartDate");

                    b.HasKey("Id");

                    b.HasIndex("ClubId");

                    b.HasIndex("PersonId");

                    b.HasIndex("SeasonId");

                    b.ToTable("Transfers");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<DateTimeOffset?>("Birthday");

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

                    b.Property<DateTimeOffset>("LastModified");

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

                    b.Property<DateTimeOffset>("RegistrationDate");

                    b.Property<int>("RoleGroupId");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Skype");

                    b.Property<string>("Title");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.HasIndex("RoleGroupId");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.UserConfig", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<bool>("IsPmToEmailNotifyEnabled");

                    b.Property<bool>("IsReplyToEmailEnabled");

                    b.Property<bool>("IsReplyToPmEnabled");

                    b.HasKey("UserId");

                    b.ToTable("UserConfigs");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Wish", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Message")
                        .HasMaxLength(300);

                    b.Property<int>("State");

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

                    b.Property<int?>("ApplicationId");

                    b.Property<string>("Scope");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationId");

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

                    b.Property<string>("Subject");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationId");

                    b.HasIndex("AuthorizationId");

                    b.ToTable("OpenIddictTokens");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.Role")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User")
                        .WithMany("Claims")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User")
                        .WithMany("Logins")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<int>", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId");

                    b.HasOne("MyLfc.Data.Entities.User")
                        .WithMany("Roles")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.ChatMessage", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User", "Author")
                        .WithMany("ChatMessages")
                        .HasForeignKey("AuthorId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Club", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.Stadium", "Stadium")
                        .WithMany("Clubs")
                        .HasForeignKey("StadiumId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.CommentVote", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.MaterialComment", "Comment")
                        .WithMany("CommentVotes")
                        .HasForeignKey("CommentId");

                    b.HasOne("MyLfc.Data.Entities.User", "User")
                        .WithMany("CommentVotes")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.ForumMessage", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User", "Author")
                        .WithMany("ForumMessages")
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLfc.Data.Entities.ForumTheme", "Theme")
                        .WithMany("Messages")
                        .HasForeignKey("ThemeId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.ForumSubsection", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.ForumSection", "Section")
                        .WithMany("Subsections")
                        .HasForeignKey("SectionId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.ForumTheme", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLfc.Data.Entities.User", "LastAnswerUser")
                        .WithMany()
                        .HasForeignKey("LastAnswerUserId");

                    b.HasOne("MyLfc.Data.Entities.ForumSubsection", "Subsection")
                        .WithMany("Themes")
                        .HasForeignKey("SubsectionId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Injury", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.Person", "Person")
                        .WithMany("Injuries")
                        .HasForeignKey("PersonId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Loan", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.Club", "Club")
                        .WithMany("Loans")
                        .HasForeignKey("ClubId");

                    b.HasOne("MyLfc.Data.Entities.Person", "Person")
                        .WithMany("Loans")
                        .HasForeignKey("PersonId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Match", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.Club", "Club")
                        .WithMany("Matches")
                        .HasForeignKey("ClubId");

                    b.HasOne("MyLfc.Data.Entities.Season", "Season")
                        .WithMany("Matches")
                        .HasForeignKey("SeasonId");

                    b.HasOne("MyLfc.Data.Entities.Stadium", "Stadium")
                        .WithMany("Matches")
                        .HasForeignKey("StadiumId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Material", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User", "Author")
                        .WithMany("Materials")
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLfc.Data.Entities.MaterialCategory", "Category")
                        .WithMany("Materials")
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.MaterialComment", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User", "Author")
                        .WithMany("Comments")
                        .HasForeignKey("AuthorId");

                    b.HasOne("MyLfc.Data.Entities.Material", "Material")
                        .WithMany("Comments")
                        .HasForeignKey("MaterialId");

                    b.HasOne("MyLfc.Data.Entities.MaterialComment", "Parent")
                        .WithMany("Children")
                        .HasForeignKey("ParentId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.PrivateMessage", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User", "Receiver")
                        .WithMany("ReceivedPrivateMessages")
                        .HasForeignKey("ReceiverId");

                    b.HasOne("MyLfc.Data.Entities.User", "Sender")
                        .WithMany("SentPrivateMessages")
                        .HasForeignKey("SenderId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.RoleRoleGroup", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.RoleGroup", "RoleGroup")
                        .WithMany("RoleGroups")
                        .HasForeignKey("RoleGroupId");

                    b.HasOne("MyLfc.Data.Entities.Role", "Role")
                        .WithMany("RoleRoleGroups")
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.Transfer", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.Club", "Club")
                        .WithMany("Transfers")
                        .HasForeignKey("ClubId");

                    b.HasOne("MyLfc.Data.Entities.Person", "Person")
                        .WithMany("Transfers")
                        .HasForeignKey("PersonId");

                    b.HasOne("MyLfc.Data.Entities.Season", "Season")
                        .WithMany()
                        .HasForeignKey("SeasonId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.User", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.RoleGroup", "RoleGroup")
                        .WithMany("Users")
                        .HasForeignKey("RoleGroupId");
                });

            modelBuilder.Entity("MyLfc.Data.Entities.UserConfig", b =>
                {
                    b.HasOne("MyLfc.Data.Entities.User", "User")
                        .WithOne("UserConfig")
                        .HasForeignKey("MyLfc.Data.Entities.UserConfig", "UserId");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictAuthorization<int>", b =>
                {
                    b.HasOne("OpenIddict.Models.OpenIddictApplication<int>", "Application")
                        .WithMany("Authorizations")
                        .HasForeignKey("ApplicationId");
                });

            modelBuilder.Entity("OpenIddict.Models.OpenIddictToken<int>", b =>
                {
                    b.HasOne("OpenIddict.Models.OpenIddictApplication<int>", "Application")
                        .WithMany("Tokens")
                        .HasForeignKey("ApplicationId");

                    b.HasOne("OpenIddict.Models.OpenIddictAuthorization<int>", "Authorization")
                        .WithMany("Tokens")
                        .HasForeignKey("AuthorizationId");
                });
        }
    }
}
