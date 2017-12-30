using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.SyndicationFeed;
using Microsoft.SyndicationFeed.Rss;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Data.Common;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages Rss.
    /// </summary>
    [AllowAnonymous, Route("Rss")]
    public class RssController : Controller
    {
        private readonly IMaterialService _materialService;
        private readonly IMemoryCache _cache;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="materialService"></param>
        /// <param name="cache"></param>
        public RssController(IMaterialService materialService, IMemoryCache cache)
        {
            _materialService = materialService;
            _cache = cache;
        }

        /// <summary>
        /// Gets latest materials as rss.
        /// </summary>
        /// <returns></returns>
        [Produces("text/xml")]
        [AllowAnonymous, HttpGet]
        public async Task<IActionResult> GetRssAsync()
        {
            var result = await _cache.GetOrCreateAsync(CacheKeysConstants.MaterialList, async x =>
                await _materialService.GetDtoAllAsync(GetBasicMaterialFilters(false)));

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
                await writer.WriteTitle("MyLFC.ru - новостная лента");
                var formatter = new RssFormatter(attributes, xmlWriter.Settings);

                foreach (var material in result.List)
                {
                    var item = new SyndicationItem
                    {
                        Title = material.Title,
                        Description = $"<img src='{material.Photo}' /><br/>{material.Brief}",
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



        private MaterialFiltersDto GetBasicMaterialFilters(bool isNewsMaker)
        {
            return new MaterialFiltersDto
            {
                Page = 1,
                MaterialType = MaterialType.Both,
                IsInNewsmakerRole = isNewsMaker
            };
        }
    }
}
