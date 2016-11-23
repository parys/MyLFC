using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Data.ResourceAccess
{
    /// <summary>
    /// Maintains a list of repositories affected by a business transaction and coordinates 
    /// the writing out of changes and the resolution of concurrency problems.
    /// </summary>
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly LiverpoolContext _context;
        
        private IGenericRepository<User> _userRepository;

        public UnitOfWork(LiverpoolContext context)
        {
            _context = context;

            InitUserManager();
        }

        private void InitUserManager()
        {
            var store = new UserStore<User, Role, LiverpoolContext, int>(_context);
            IPasswordHasher<User> hasher = new PasswordHasher<User>();
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