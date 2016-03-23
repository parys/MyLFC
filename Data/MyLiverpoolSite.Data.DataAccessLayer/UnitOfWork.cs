using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security.DataProtection;
using MyLiverpoolSite.Common.Utilities;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
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
     //   private IGenericRepository<BlogItem> _blogItemRepository;
        private IGenericRepository<Material> _materialRepository;
    //    private IGenericRepository<BlogCategory> _blogCategoryRepository;
        private IGenericRepository<MaterialCategory> _materialCategoryRepository;
   //     private IGenericRepository<BlogComment> _blogCommentRepository;
        private IGenericRepository<MaterialComment> _materialCommentRepository;
        private IGenericRepository<ForumSection> _forumSectionRepository;
        private IGenericRepository<ForumTheme> _forumThemeRepository;
        private IGenericRepository<ForumSubsection> _forumSubsectionRepository;
        private IGenericRepository<ForumMessage> _forumMessageRepository;
        private IGenericRepository<UserClaim> _userClaimRepository;
       //  private IGenericRepository<UserRole> _userRoleRepository;
       // private IGenericRepository<UserLogin> _userLoginRepository;
        private IGenericRepository<Role> _roleRepository;
        private IGenericRepository<RoleGroup> _roleGroupRepository;
        private IGenericRepository<PrivateMessage> _privateMessageRepository;
        //private IGenericRepository<RoleClaim> _roleClaimRepository;

        public UnitOfWork()
        {
            var provider = new MachineKeyProtectionProvider();
            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(_context);
            UserManager = new UserManager<User, int>(userStore)
            {
                UserTokenProvider = new DataProtectorTokenProvider<User, int>(provider.Create("EmailConfirmation")),
                UserLockoutEnabledByDefault = true
            };
        }

        //private readonly UserStore<User, Role, int, UserLogin, UserRole, UserClaim> userStore; 
        public UserManager<User, int> UserManager { get; set; } 


        /// <summary>
        /// Return userRepository.
        /// </summary>
        public IGenericRepository<User> UserRepository => _userRepository ?? (_userRepository = new GenericRepository<User>(_context));

        // <summary>
        // Return qualificationRepository.
        // </summary>
        //public IGenericRepository<BlogItem> BlogItemRepository => _blogItemRepository ??
        //                                                          (_blogItemRepository = new GenericRepository<BlogItem>(_context));

        //public IGenericRepository<BlogCategory> BlogCategoryRepository => _blogCategoryRepository ??
        //                                                                  (_blogCategoryRepository = new GenericRepository<BlogCategory>(_context));

        public IGenericRepository<MaterialCategory> MaterialCategoryRepository => _materialCategoryRepository ??
                                                                          (_materialCategoryRepository = new GenericRepository<MaterialCategory>(_context));

        /// <summary>
        /// Return roleRepository.
        /// </summary>
        public IGenericRepository<Material> MaterialRepository => _materialRepository ?? (_materialRepository = new GenericRepository<Material>(_context));
        //public IGenericRepository<BlogComment> BlogCommentRepository => _blogCommentRepository ?? (_blogCommentRepository = new GenericRepository<BlogComment>(_context));
        public IGenericRepository<MaterialComment> MaterialCommentRepository => _materialCommentRepository ?? (_materialCommentRepository = new GenericRepository<MaterialComment>(_context));
        public IGenericRepository<ForumSection> ForumSectionRepository => _forumSectionRepository ?? (_forumSectionRepository = new GenericRepository<ForumSection>(_context));
        public IGenericRepository<ForumTheme> ForumThemeRepository => _forumThemeRepository ?? (_forumThemeRepository = new GenericRepository<ForumTheme>(_context));
        public IGenericRepository<ForumSubsection> ForumSubsectionRepository => _forumSubsectionRepository ?? (_forumSubsectionRepository = new GenericRepository<ForumSubsection>(_context));
        public IGenericRepository<ForumMessage> ForumMessageRepository => _forumMessageRepository ?? (_forumMessageRepository = new GenericRepository<ForumMessage>(_context));
       // public IGenericRepository<UserLogin> UserLoginRepository => _userLoginRepository ?? (_userLoginRepository = new GenericRepository<UserLogin>(_context));
        public IGenericRepository<UserClaim> UserClaimRepository => _userClaimRepository ?? (_userClaimRepository = new GenericRepository<UserClaim>(_context));
      //   public IGenericRepository<UserRole> UserRoleRepository => UserRoleRepository ?? (_userRoleRepository = new GenericRepository<UserRole>(_context));
        public IGenericRepository<Role> RoleRepository => _roleRepository ?? (_roleRepository = new GenericRepository<Role>(_context));
        public IGenericRepository<RoleGroup> RoleGroupRepository => _roleGroupRepository ?? (_roleGroupRepository = new GenericRepository<RoleGroup>(_context));

        public IGenericRepository<PrivateMessage> PrivateMessageRepository => _privateMessageRepository ?? (_privateMessageRepository = new GenericRepository<PrivateMessage>(_context));

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
            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                var e = ex;
                
                throw;
            }
        }
        public async Task SaveAsync()
        {
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                var e = ex;

                throw;
            }
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