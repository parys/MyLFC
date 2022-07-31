using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SyndicationFeed;
using Microsoft.SyndicationFeed.Rss;
using MyLfc.Application.Materials.Queries;

namespace MyLfc.Web.WebHost.Controllers;

/// <inheritdoc />
/// <summary>
/// Manages Rss.
/// </summary>
[AllowAnonymous]
public class RssController : BaseController
{
    /// <summary>
    /// Gets latest materials as rss.
    /// </summary>
    /// <returns></returns>
    [Produces("text/xml")]
    [AllowAnonymous, HttpGet]
    public async Task<IActionResult> GetRssAsync()
    {
        var result = await Mediator.Send(new GetMaterialListQuery.Request
            {
                CurrentPage = 1,
                PageSize = 10
            });

        var host = Request.Scheme + "://" + Request.Host + "/";
        var sw = new StringWriter();
        var settings = new XmlWriterSettings {Async = true, Indent = true };
        using (var xmlWriter = XmlWriter.Create(sw, settings))
        {
            var attributes = new List<SyndicationAttribute>
            {
                new SyndicationAttribute("xmlns:link", host)
            };
            var writer = new RssFeedWriter(xmlWriter);
            await writer.WriteTitle("MyLFC.ru - новостная лента о ФК Ливерпуль");
            var formatter = new RssFormatter(attributes, xmlWriter.Settings);

            foreach (var material in result.Results)
            {
                var item = new SyndicationItem
                {
                    Title = material.Title,
                    Description = $"<img src='{material.PhotoPreview}' /><br/>{material.Brief}",
                    Id = material.Id.ToString(),
                    Published = material.AdditionTime,
                    LastUpdated = material.AdditionTime,
                };

                item.AddCategory(new SyndicationCategory(material.CategoryName));
                item.AddContributor(new SyndicationPerson(material.UserName, material.UserName));
                item.AddLink(new SyndicationLink(new Uri(host + material.TypeName + "/" + material.Id)));
                //item.AddLink(new SyndicationLink(new Uri(host + material.TypeName + "/" + material.Id)));


                // Format the item as SyndicationContent
                var content = new SyndicationContent(formatter.CreateContent(item));

                // Add custom fields/attributes
                //content.AddAttribute(new SyndicationAttribute("img", host + material.Photo));
                //content.AddField(new SyndicationContent("customElement", "321321", "Custom Value"));

                await writer.Write(content);
            }
            xmlWriter.Flush();
        }

        var xml = new XmlDocument();
        xml.LoadXml(sw.ToString());

        return Content(xml.InnerXml, "application/xml");
        // return Ok(xml.InnerXml);
    }
}
