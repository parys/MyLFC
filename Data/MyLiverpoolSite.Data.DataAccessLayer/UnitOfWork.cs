using System;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{
    /// <summary>
    /// Maintains a list of repositories affected by a business transaction and coordinates 
    /// the writing out of changes and the resolution of concurrency problems.
    /// </summary>
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly LiverpoolContext _context = new LiverpoolContext();

        private IGenericRepository<User> _userRepository;
        private IGenericRepository<BlogItem> _blogItemRepository;
        private IGenericRepository<NewsItem> _newsItemRepository;
        private IGenericRepository<BlogCategory> _blogCategoryRepository;
        private IGenericRepository<NewsCategory> _newsCategoryRepository;
        private IGenericRepository<BlogComment> _blogCommentRepository;
        private IGenericRepository<NewsComment> _newsCommentRepository;
        private IGenericRepository<ForumSection> _forumSectionRepository;
        private IGenericRepository<ForumTheme> _forumThemeRepository;
        private IGenericRepository<ForumSubsection> _forumSubsectionRepository;
        private IGenericRepository<ForumMessage> _forumMessageRepository;
        private IGenericRepository<UserClaim> _userClaimRepository;
        private IGenericRepository<UserRole> _userRoleRepository;
        private IGenericRepository<UserLogin> _userLoginRepository;
        private IGenericRepository<Role> _roleRepository;
        //private IGenericRepository<RoleClaim> _roleClaimRepository;

        /// <summary>
        /// Return userRepository.
        /// </summary>
        public IGenericRepository<User> UserRepository
        {
            get { return _userRepository ?? (_userRepository = new GenericRepository<User>(_context)); }
        }

        // <summary>
        // Return qualificationRepository.
        // </summary>
        public IGenericRepository<BlogItem> BlogItemRepository
        {
            get
            {
                return _blogItemRepository ??
                       (_blogItemRepository = new GenericRepository<BlogItem>(_context));
            }
        }

        public IGenericRepository<BlogCategory> BlogCategoryRepository
        {
            get
            {
                return _blogCategoryRepository ??
                       (_blogCategoryRepository = new GenericRepository<BlogCategory>(_context));
            }
        }

        public IGenericRepository<NewsCategory> NewsCategoryRepository
        {
            get
            {
                return _newsCategoryRepository ??
                       (_newsCategoryRepository = new GenericRepository<NewsCategory>(_context));
            }
        }

        /// <summary>
        /// Return roleRepository.
        /// </summary>
        public IGenericRepository<NewsItem> NewsItemRepository
        {
            get { return _newsItemRepository ?? (_newsItemRepository = new GenericRepository<NewsItem>(_context)); }
        }

        public IGenericRepository<BlogComment> BlogCommentRepository
        {
            get { return _blogCommentRepository ?? (_blogCommentRepository = new GenericRepository<BlogComment>(_context)); }
        }
        public IGenericRepository<NewsComment> NewsCommentRepository
        {
            get { return _newsCommentRepository ?? (_newsCommentRepository = new GenericRepository<NewsComment>(_context)); }
        }

        public IGenericRepository<ForumSection> ForumSectionRepository
        {
            get { return _forumSectionRepository ?? (_forumSectionRepository = new GenericRepository<ForumSection>(_context)); }
        }

        public IGenericRepository<ForumTheme> ForumThemeRepository
        {
            get { return _forumThemeRepository ?? (_forumThemeRepository = new GenericRepository<ForumTheme>(_context)); }
        }
        public IGenericRepository<ForumSubsection> ForumSubsectionRepository
        {
            get { return _forumSubsectionRepository ?? (_forumSubsectionRepository = new GenericRepository<ForumSubsection>(_context)); }
        }
        public IGenericRepository<ForumMessage> ForumMessageRepository
        {
            get { return _forumMessageRepository ?? (_forumMessageRepository = new GenericRepository<ForumMessage>(_context)); }
        }
        public IGenericRepository<UserLogin> UserLoginRepository
        {
            get { return _userLoginRepository ?? (_userLoginRepository = new GenericRepository<UserLogin>(_context)); }
        }
        public IGenericRepository<UserClaim> UserClaimRepository
        {
            get { return _userClaimRepository ?? (_userClaimRepository = new GenericRepository<UserClaim>(_context)); }
        }
        public IGenericRepository<UserRole> UserRoleRepository
        {
            get { return UserRoleRepository ?? (_userRoleRepository = new GenericRepository<UserRole>(_context)); }
        }
        public IGenericRepository<Role> RoleRepository
        {
            get { return _roleRepository ?? (_roleRepository = new GenericRepository<Role>(_context)); }
        }
        //public IGenericRepository<RoleClaim> RoleClaimRepository
        //{
        //    get { return _roleClaimRepository ?? (_roleClaimRepository = new GenericRepository<RoleClaim>(_context)); }
        //}

        //public IGenericRepository<UserRole> UserRoleRepository
        //{
        //    get
        //    {
        //        return _userRoleRepository;
        //    }

        //    set
        //    {
        //        _userRoleRepository = value;
        //    }
        //}

        /// <summary>
        /// Saves changes to shared data source.
        /// </summary>
        public void Save()
        {
            _context.SaveChanges();
        }

        private bool _disposed;

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            _disposed = true;
        }

        /// <summary>
        /// The release of resources.
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}