IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [AspNetUserTokens] (
    [UserId] int NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max),
    CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name])
);

GO

CREATE TABLE [Clubs] (
    [Id] int NOT NULL IDENTITY,
    [EnglishName] nvarchar(max),
    [Logo] nvarchar(max),
    [Name] nvarchar(max),
    [Stadium] nvarchar(max),
    CONSTRAINT [PK_Clubs] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [ForumSections] (
    [Id] int NOT NULL IDENTITY,
    [IdOld] int NOT NULL,
    [Name] nvarchar(max),
    CONSTRAINT [PK_ForumSections] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [MaterialCategories] (
    [Id] int NOT NULL IDENTITY,
    [Description] nvarchar(max),
    [MaterialType] int NOT NULL,
    [Name] nvarchar(max),
    [OldId] int NOT NULL,
    CONSTRAINT [PK_MaterialCategories] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Wishes] (
    [Id] int NOT NULL IDENTITY,
    [Message] nvarchar(300),
    [Title] nvarchar(30),
    [Type] int NOT NULL,
    CONSTRAINT [PK_Wishes] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [OpenIddictApplications] (
    [Id] int NOT NULL IDENTITY,
    [ClientId] nvarchar(450),
    [ClientSecret] nvarchar(max),
    [DisplayName] nvarchar(max),
    [LogoutRedirectUri] nvarchar(max),
    [RedirectUri] nvarchar(max),
    [Type] nvarchar(max),
    CONSTRAINT [PK_OpenIddictApplications] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [OpenIddictScopes] (
    [Id] int NOT NULL IDENTITY,
    [Description] nvarchar(max),
    CONSTRAINT [PK_OpenIddictScopes] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Matches] (
    [Id] int NOT NULL IDENTITY,
    [ClubId] int NOT NULL,
    [DateTime] datetime2 NOT NULL,
    [IsHome] bit NOT NULL,
    [MatchType] int NOT NULL,
    [Score] nvarchar(max),
    CONSTRAINT [PK_Matches] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Matches_Clubs_ClubId] FOREIGN KEY ([ClubId]) REFERENCES [Clubs] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [ForumSubsections] (
    [Id] int NOT NULL IDENTITY,
    [AnswersCount] int NOT NULL,
    [Description] nvarchar(max),
    [IdOld] int NOT NULL,
    [Name] nvarchar(max),
    [SectionId] int NOT NULL,
    [ThemesCount] int NOT NULL,
    [Views] int NOT NULL,
    CONSTRAINT [PK_ForumSubsections] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ForumSubsections_ForumSections_SectionId] FOREIGN KEY ([SectionId]) REFERENCES [ForumSections] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [ForumThemes] (
    [Id] int NOT NULL IDENTITY,
    [Answers] int NOT NULL,
    [AuthorId] int NOT NULL,
    [Description] nvarchar(max),
    [IdOld] int NOT NULL,
    [IsClosed] bit NOT NULL,
    [IsPool] bit NOT NULL,
    [LastAnswerUserId] int NOT NULL,
    [LastMessageAdditionTime] datetime2,
    [Name] nvarchar(max),
    [OnTop] bit NOT NULL,
    [SubsectionId] int NOT NULL,
    [Views] int NOT NULL,
    CONSTRAINT [PK_ForumThemes] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ForumThemes_ForumSubsections_SubsectionId] FOREIGN KEY ([SubsectionId]) REFERENCES [ForumSubsections] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [ForumMessages] (
    [Id] int NOT NULL IDENTITY,
    [AdditionTime] datetime2 NOT NULL,
    [AuthorId] int NOT NULL,
    [IsFirstMessage] bit NOT NULL,
    [LastModifiedTime] datetime2 NOT NULL,
    [Message] nvarchar(max),
    [OldId] int NOT NULL,
    [ThemeId] int NOT NULL,
    CONSTRAINT [PK_ForumMessages] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ForumMessages_ForumThemes_ThemeId] FOREIGN KEY ([ThemeId]) REFERENCES [ForumThemes] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [MaterialComments] (
    [Id] int NOT NULL IDENTITY,
    [AdditionTime] datetime2 NOT NULL,
    [Answer] nvarchar(max),
    [AuthorId] int NOT NULL,
    [IsVerified] bit NOT NULL,
    [LastModified] datetime2 NOT NULL,
    [MaterialId] int NOT NULL,
    [MaterialType] int NOT NULL,
    [Message] nvarchar(max),
    [OldId] int NOT NULL,
    [ParentId] int,
    [Pending] bit NOT NULL,
    CONSTRAINT [PK_MaterialComments] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_MaterialComments_MaterialComments_ParentId] FOREIGN KEY ([ParentId]) REFERENCES [MaterialComments] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [Materials] (
    [Id] int NOT NULL IDENTITY,
    [AdditionTime] datetime2 NOT NULL,
    [AuthorId] int NOT NULL,
    [Brief] nvarchar(max),
    [CanCommentary] bit NOT NULL,
    [CategoryId] int NOT NULL,
    [LastModified] datetime2 NOT NULL,
    [Message] nvarchar(max),
    [OldId] int NOT NULL,
    [OnTop] bit NOT NULL,
    [Pending] bit NOT NULL,
    [PhotoPath] nvarchar(max),
    [Rating] real NOT NULL,
    [RatingNumbers] int NOT NULL,
    [RatingSumm] int NOT NULL,
    [Reads] int NOT NULL,
    [Source] nvarchar(max),
    [Title] nvarchar(max),
    [Type] int NOT NULL,
    CONSTRAINT [PK_Materials] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Materials_MaterialCategories_CategoryId] FOREIGN KEY ([CategoryId]) REFERENCES [MaterialCategories] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [ClaimType] nvarchar(max),
    [ClaimValue] nvarchar(max),
    [RoleId] int NOT NULL,
    CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetUserRoles] (
    [UserId] int NOT NULL,
    [RoleId] int NOT NULL,
    CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId])
);

GO

CREATE TABLE [RoleGroups] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max),
    [RoleId] int,
    [RussianName] nvarchar(max),
    CONSTRAINT [PK_RoleGroups] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetRoles] (
    [Id] int NOT NULL IDENTITY,
    [ConcurrencyStamp] nvarchar(max),
    [Name] nvarchar(256),
    [NormalizedName] nvarchar(256),
    [RoleGroupId] int,
    CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetRoles_RoleGroups_RoleGroupId] FOREIGN KEY ([RoleGroupId]) REFERENCES [RoleGroups] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [AspNetUsers] (
    [Id] int NOT NULL IDENTITY,
    [AccessFailedCount] int NOT NULL,
    [Birthday] datetime2,
    [City] nvarchar(max),
    [ConcurrencyStamp] nvarchar(max),
    [Country] nvarchar(max),
    [Email] nvarchar(256),
    [EmailConfirmed] bit NOT NULL,
    [FullName] nvarchar(max),
    [Gender] bit NOT NULL,
    [Homepage] nvarchar(max),
    [Ip] nvarchar(max),
    [LastModified] datetime2 NOT NULL,
    [LockoutEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset,
    [NormalizedEmail] nvarchar(256),
    [NormalizedUserName] nvarchar(256),
    [OldId] int NOT NULL,
    [PasswordHash] nvarchar(max),
    [PhoneNumber] nvarchar(max),
    [PhoneNumberConfirmed] bit NOT NULL,
    [Photo] nvarchar(max),
    [RegistrationDate] datetime2 NOT NULL,
    [RoleGroupId] int NOT NULL,
    [SecurityStamp] nvarchar(max),
    [Skype] nvarchar(max),
    [Title] nvarchar(max),
    [TwoFactorEnabled] bit NOT NULL,
    [UserName] nvarchar(256),
    CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetUsers_RoleGroups_RoleGroupId] FOREIGN KEY ([RoleGroupId]) REFERENCES [RoleGroups] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [ClaimType] nvarchar(max),
    [ClaimValue] nvarchar(max),
    [UserId] int NOT NULL,
    CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max),
    [UserId] int NOT NULL,
    CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [PrivateMessages] (
    [Id] int NOT NULL IDENTITY,
    [IsRead] bit NOT NULL,
    [Message] nvarchar(500),
    [ReceiverId] int NOT NULL,
    [SenderId] int NOT NULL,
    [SentTime] datetime2 NOT NULL,
    [Title] nvarchar(30),
    CONSTRAINT [PK_PrivateMessages] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_PrivateMessages_AspNetUsers_ReceiverId] FOREIGN KEY ([ReceiverId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_PrivateMessages_AspNetUsers_SenderId] FOREIGN KEY ([SenderId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [OpenIddictAuthorizations] (
    [Id] int NOT NULL IDENTITY,
    [Scope] nvarchar(max),
    [UserId] int,
    CONSTRAINT [PK_OpenIddictAuthorizations] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OpenIddictAuthorizations_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [OpenIddictTokens] (
    [Id] int NOT NULL IDENTITY,
    [ApplicationId] int,
    [AuthorizationId] int,
    [Type] nvarchar(max),
    [UserId] int,
    CONSTRAINT [PK_OpenIddictTokens] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OpenIddictTokens_OpenIddictApplications_ApplicationId] FOREIGN KEY ([ApplicationId]) REFERENCES [OpenIddictApplications] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId] FOREIGN KEY ([AuthorizationId]) REFERENCES [OpenIddictAuthorizations] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_OpenIddictTokens_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION
);

GO

CREATE INDEX [IX_AspNetRoleClaims_RoleId] ON [AspNetRoleClaims] ([RoleId]);

GO

CREATE INDEX [IX_AspNetUserClaims_UserId] ON [AspNetUserClaims] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserLogins_UserId] ON [AspNetUserLogins] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserRoles_RoleId] ON [AspNetUserRoles] ([RoleId]);

GO

CREATE INDEX [IX_AspNetUserRoles_UserId] ON [AspNetUserRoles] ([UserId]);

GO

CREATE INDEX [IX_ForumMessages_AuthorId] ON [ForumMessages] ([AuthorId]);

GO

CREATE INDEX [IX_ForumMessages_ThemeId] ON [ForumMessages] ([ThemeId]);

GO

CREATE INDEX [IX_ForumSubsections_SectionId] ON [ForumSubsections] ([SectionId]);

GO

CREATE INDEX [IX_ForumThemes_AuthorId] ON [ForumThemes] ([AuthorId]);

GO

CREATE INDEX [IX_ForumThemes_LastAnswerUserId] ON [ForumThemes] ([LastAnswerUserId]);

GO

CREATE INDEX [IX_ForumThemes_SubsectionId] ON [ForumThemes] ([SubsectionId]);

GO

CREATE INDEX [IX_Matches_ClubId] ON [Matches] ([ClubId]);

GO

CREATE INDEX [IX_Materials_AuthorId] ON [Materials] ([AuthorId]);

GO

CREATE INDEX [IX_Materials_CategoryId] ON [Materials] ([CategoryId]);

GO

CREATE INDEX [IX_MaterialComments_AuthorId] ON [MaterialComments] ([AuthorId]);

GO

CREATE INDEX [IX_MaterialComments_MaterialId] ON [MaterialComments] ([MaterialId]);

GO

CREATE INDEX [IX_MaterialComments_ParentId] ON [MaterialComments] ([ParentId]);

GO

CREATE INDEX [IX_PrivateMessages_ReceiverId] ON [PrivateMessages] ([ReceiverId]);

GO

CREATE INDEX [IX_PrivateMessages_SenderId] ON [PrivateMessages] ([SenderId]);

GO

CREATE INDEX [RoleNameIndex] ON [AspNetRoles] ([NormalizedName]);

GO

CREATE INDEX [IX_AspNetRoles_RoleGroupId] ON [AspNetRoles] ([RoleGroupId]);

GO

CREATE INDEX [IX_RoleGroups_RoleId] ON [RoleGroups] ([RoleId]);

GO

CREATE INDEX [EmailIndex] ON [AspNetUsers] ([NormalizedEmail]);

GO

CREATE UNIQUE INDEX [UserNameIndex] ON [AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;

GO

CREATE INDEX [IX_AspNetUsers_RoleGroupId] ON [AspNetUsers] ([RoleGroupId]);

GO

CREATE UNIQUE INDEX [IX_OpenIddictApplications_ClientId] ON [OpenIddictApplications] ([ClientId]) WHERE [ClientId] IS NOT NULL;

GO

CREATE INDEX [IX_OpenIddictAuthorizations_UserId] ON [OpenIddictAuthorizations] ([UserId]);

GO

CREATE INDEX [IX_OpenIddictTokens_ApplicationId] ON [OpenIddictTokens] ([ApplicationId]);

GO

CREATE INDEX [IX_OpenIddictTokens_AuthorizationId] ON [OpenIddictTokens] ([AuthorizationId]);

GO

CREATE INDEX [IX_OpenIddictTokens_UserId] ON [OpenIddictTokens] ([UserId]);

GO

ALTER TABLE [ForumThemes] ADD CONSTRAINT [FK_ForumThemes_AspNetUsers_AuthorId] FOREIGN KEY ([AuthorId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [ForumThemes] ADD CONSTRAINT [FK_ForumThemes_AspNetUsers_LastAnswerUserId] FOREIGN KEY ([LastAnswerUserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [ForumMessages] ADD CONSTRAINT [FK_ForumMessages_AspNetUsers_AuthorId] FOREIGN KEY ([AuthorId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [MaterialComments] ADD CONSTRAINT [FK_MaterialComments_AspNetUsers_AuthorId] FOREIGN KEY ([AuthorId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [MaterialComments] ADD CONSTRAINT [FK_MaterialComments_Materials_MaterialId] FOREIGN KEY ([MaterialId]) REFERENCES [Materials] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [Materials] ADD CONSTRAINT [FK_Materials_AspNetUsers_AuthorId] FOREIGN KEY ([AuthorId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [AspNetRoleClaims] ADD CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [AspNetUserRoles] ADD CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [AspNetUserRoles] ADD CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION;

GO

ALTER TABLE [RoleGroups] ADD CONSTRAINT [FK_RoleGroups_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE NO ACTION;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20160907203727_FromOldToNew', N'1.0.1');

GO

ALTER TABLE [AspNetRoles] DROP CONSTRAINT [FK_AspNetRoles_RoleGroups_RoleGroupId];

GO

ALTER TABLE [RoleGroups] DROP CONSTRAINT [FK_RoleGroups_AspNetRoles_RoleId];

GO

DROP INDEX [IX_RoleGroups_RoleId] ON [RoleGroups];

GO

DROP INDEX [IX_AspNetRoles_RoleGroupId] ON [AspNetRoles];

GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'RoleGroups') AND [c].[name] = N'RoleId');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [RoleGroups] DROP CONSTRAINT [' + @var0 + ']');
ALTER TABLE [RoleGroups] DROP COLUMN [RoleId];

GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'AspNetRoles') AND [c].[name] = N'RoleGroupId');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [AspNetRoles] DROP CONSTRAINT [' + @var1 + ']');
ALTER TABLE [AspNetRoles] DROP COLUMN [RoleGroupId];

GO

CREATE TABLE [RoleRoleGroups] (
    [RoleId] int NOT NULL,
    [RoleGroupId] int NOT NULL,
    CONSTRAINT [PK_RoleRoleGroups] PRIMARY KEY ([RoleId], [RoleGroupId]),
    CONSTRAINT [FK_RoleRoleGroups_RoleGroups_RoleGroupId] FOREIGN KEY ([RoleGroupId]) REFERENCES [RoleGroups] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_RoleRoleGroups_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE NO ACTION
);

GO

CREATE INDEX [IX_RoleRoleGroups_RoleGroupId] ON [RoleRoleGroups] ([RoleGroupId]);

GO

CREATE INDEX [IX_RoleRoleGroups_RoleId] ON [RoleRoleGroups] ([RoleId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20160913140636_AddedRoleRoleGroupTable', N'1.0.1');

GO

