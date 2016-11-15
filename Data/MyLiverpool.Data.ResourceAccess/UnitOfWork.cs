using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;

namespace MyLiverpool.Data.ResourceAccess
{
    /// <summary>
    /// Maintains a list of repositories affected by a business transaction and coordinates 
    /// the writing out of changes and the resolution of concurrency problems.
    /// </summary>
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly LiverpoolContext _context;


        private IGenericRepository<Club> _clubRepository;
        private IGenericRepository<ForumTheme> _forumThemeRepository;
        private IGenericRepository<ForumSubsection> _forumSubsectionRepository;
        private IGenericRepository<ForumMessage> _forumMessageRepository;
     //   private IGenericRepository<Material> _materialRepository;
        private IGenericRepository<MaterialComment> _materialCommentRepository;
        private IGenericRepository<ForumSection> _forumSectionRepository;
      //  private IGenericRepository<PrivateMessage> _privateMessageRepository;
        private IGenericRepository<Role> _roleRepository;
        private IGenericRepository<RoleGroup> _roleGroupRepository;
        private IGenericRepository<User> _userRepository;
       // private IGenericRepository<UserClaim> _userClaimRepository;
        private IGenericRepository<Wish> _wishRepository;

        public UnitOfWork(LiverpoolContext context)
        {
            _context = context;

            InitUserManager();
        }

        private void InitUserManager()
        {
            var store = new UserStore<User, Role, LiverpoolContext, int>(_context);
            IPasswordHasher<User> hasher = new PasswordHasher<User>();
            //IUserT
           // IServiceProvider sp = new Servi
                //var provider = new MachineKeyProtectionProvider();
            //var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(_context);
            UserManager = new UserManager<User>(store, null, hasher, null, null, null, null, null, null);
      //      UserManager.UserTokenProvider = new DataProtectorTokenProvider<ApplicationUser>(
  //  provider.Create("EmailConfirmation"));
        }

        //private readonly UserStore<User, Role, int, UserLogin, UserRole, UserClaim> userStore; 
        public UserManager<User> UserManager { get; set; } 


        /// <summary>
        /// Return userRepository.
        /// </summary>
        public IGenericRepository<User> UserRepository => _userRepository ?? (_userRepository = new GenericRepository<User>(_context));
        
        //public IGenericRepository<BlogCategory> BlogCategoryRepository => _blogCategoryRepository ??
        //                                                                  (_blogCategoryRepository = new GenericRepository<BlogCategory>(_context));
        
        /// <summary>
        /// Return roleRepository.
        /// </summary>
       // public IGenericRepository<Material> MaterialRepository => _materialRepository ?? (_materialRepository = new GenericRepository<Material>(_context));
        public IGenericRepository<Club> ClubRepository => _clubRepository ?? (_clubRepository = new GenericRepository<Club>(_context));
        public IGenericRepository<MaterialComment> MaterialCommentRepository => _materialCommentRepository ?? (_materialCommentRepository = new GenericRepository<MaterialComment>(_context));
        public IGenericRepository<ForumSection> ForumSectionRepository => _forumSectionRepository ?? (_forumSectionRepository = new GenericRepository<ForumSection>(_context));
        public IGenericRepository<ForumTheme> ForumThemeRepository => _forumThemeRepository ?? (_forumThemeRepository = new GenericRepository<ForumTheme>(_context));
        public IGenericRepository<ForumSubsection> ForumSubsectionRepository => _forumSubsectionRepository ?? (_forumSubsectionRepository = new GenericRepository<ForumSubsection>(_context));
        public IGenericRepository<ForumMessage> ForumMessageRepository => _forumMessageRepository ?? (_forumMessageRepository = new GenericRepository<ForumMessage>(_context));
      //  public IGenericRepository<UserClaim> UserClaimRepository => _userClaimRepository ?? (_userClaimRepository = new GenericRepository<UserClaim>(_context));
         public IGenericRepository<Wish> WishRepository => _wishRepository ?? (_wishRepository = new GenericRepository<Wish>(_context));
        public IGenericRepository<Role> RoleRepository => _roleRepository ?? (_roleRepository = new GenericRepository<Role>(_context));
        public IGenericRepository<RoleGroup> RoleGroupRepository => _roleGroupRepository ?? (_roleGroupRepository = new GenericRepository<RoleGroup>(_context));

      //  public IGenericRepository<PrivateMessage> PrivateMessageRepository => _privateMessageRepository ?? (_privateMessageRepository = new GenericRepository<PrivateMessage>(_context));

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
                var message = ex.Message;
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