//using System;
//using System.Collections.Generic;
//using System.Linq;
//using Microsoft.AspNetCore.Authorization;
//using Swashbuckle.Swagger.Model;
//using Swashbuckle.SwaggerGen.Generator;

//namespace MyLfc.Web.WebHost.Extensions
//{
//    public class AssignSecurityRequirements : IOperationFilter
//    {
//        public void Apply(Operation operation, OperationFilterContext context)
//        {
//            //try
//            //{
//            //    //IEnumerable<string> controllerScopes = new List<string>();
//            //    //var roles = context.ApiDescription.GetControllerAttributes()
//            //    //    .OfType<AuthorizeAttribute>()
//            //    //    .Select(attr => attr.Roles).ToList();
//            //    //if (roles.Any())
//            //    //{
//            //        var controllerScopes = context.ApiDescription.GetControllerAttributes()
//            //            .OfType<AuthorizeAttribute>()
//            //            .SelectMany(attr => attr.Roles.Split(','));
//            //    //}

//            //    //IEnumerable<string> actionScopes = new List<string>();
//            //    //roles = context.ApiDescription.GetActionAttributes()
//            //    //    .OfType<AuthorizeAttribute>()
//            //    //    .Select(attr => attr.Roles).ToList();
//            //    //if (roles != null)
//            //    //{
//            //        var actionScopes = context.ApiDescription.GetActionAttributes()
//            //            .OfType<AuthorizeAttribute>()
//            //            .SelectMany(attr => attr.Roles.Split(','));
//            //    //}
//            //    var scopes = controllerScopes.Union(actionScopes).Distinct();

//            //    if (scopes.Any())
//            //    {
//            //        if (operation.Security == null)
//            //            operation.Security = new List<IDictionary<string, IEnumerable<string>>>();

//            //        var oAuthRequirements = new Dictionary<string, IEnumerable<string>>
//            //        {
//            //            {"oauth2", scopes}
//            //        };

//            //        operation.Security.Add(oAuthRequirements);
//            //    }
//            //}
//            //catch (Exception ex)
//            //{

//            //}
//        }
//    }
//}
