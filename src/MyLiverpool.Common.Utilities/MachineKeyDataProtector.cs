using Microsoft.AspNetCore.DataProtection;

namespace MyLiverpool.Common.Utilities
{
    public class MachineKeyDataProtector : IDataProtector
    {
        private readonly string[] _purposes;

        public MachineKeyDataProtector(string[] purposes)
        {
            _purposes = purposes;
        }

        public byte[] Protect(byte[] plaintext)
        {
            throw new System.NotImplementedException();
            //return MachineKey.Protect(plaintext, _purposes);
        }

        public byte[] Unprotect(byte[] protectedData)
        {
            throw new System.NotImplementedException();
           // return MachineKey.Unprotect(protectedData, _purposes);
        }

        public IDataProtector CreateProtector(string purpose)
        {
            throw new System.NotImplementedException();
        }
    }
}
