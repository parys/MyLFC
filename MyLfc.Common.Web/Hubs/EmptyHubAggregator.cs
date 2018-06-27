using System;
using System.Collections.Generic;
using System.Text;

namespace MyLfc.Common.Web.Hubs
{
    public class EmptyHubAggregator : ISignalRHubAggregator
    {
        public void Send<T>(string endpoint, T model)
        {
        }

        public void Send(string endpoint)
        {
        }

        public void SendToUser<T>(string endpoint, T obj, int userId)
        {
        }
    }
}
