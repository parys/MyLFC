using System.Web;
using System.Web.Http.Filters;
using System.Web.Mvc;

namespace MyLiverpool.Web.WebApi
{
    public class ElmahErrorAttribute : HandleErrorAttribute
    {

        public override void OnException(ExceptionContext context)
        {

            if (context.Exception != null)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(context.Exception);
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(context.Exception));
            }

            base.OnException(context);
        }
    }
}