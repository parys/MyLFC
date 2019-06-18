using Microsoft.AspNetCore.DataProtection;

namespace MyLiverpool.Common.Utilities
{
    public class MachineKeyProtectionProvider : IDataProtectionProvider
    {
        public IDataProtector Create(params string[] purposes)
        {
            return new MachineKeyDataProtector(purposes);
        }

        public IDataProtector CreateProtector(string purpose)
        {
            throw new System.NotImplementedException();
        }
    }
}
