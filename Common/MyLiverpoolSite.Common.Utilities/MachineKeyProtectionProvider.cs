using Microsoft.Owin.Security.DataProtection;

namespace MyLiverpoolSite.Common.Utilities
{
    public class MachineKeyProtectionProvider : IDataProtectionProvider
    {
        public IDataProtector Create(params string[] purposes)
        {
            return new MachineKeyDataProtector(purposes);
        }
    }
}
