using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.TagHelpers
{
    public class PageLinkTagHelper : TagHelper
    {
        private readonly IUrlHelperFactory _urlHelperFactory;
        public PageLinkTagHelper(IUrlHelperFactory helperFactory)
        {
            _urlHelperFactory = helperFactory;
        }
        [ViewContext]
        [HtmlAttributeNotBound]
        public ViewContext ViewContext { get; set; }
        public IPageable PageModel { get; set; }
        public string PageAction { get; set; }
        
        [HtmlAttributeName(DictionaryAttributePrefix = "page-url-")]
        public Dictionary<string, object> PageUrlValues { get; set; } = new Dictionary<string, object>();

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            IUrlHelper urlHelper = _urlHelperFactory.GetUrlHelper(ViewContext);
            output.TagName = "div";

            TagBuilder tag = new TagBuilder("ul");
            tag.AddCssClass("pagination");

            if (PageModel.PageNo != 1)
            {
                var firstPage = CreateTag(1, urlHelper);
                tag.InnerHtml.AppendHtml(firstPage);
            }

            TagBuilder currentItem = CreateTag(PageModel.PageNo, urlHelper);

            if (PageModel.HasPreviousPage && PageModel.PageNo > 2)
            {
                TagBuilder prevItem = CreateTag(PageModel.PageNo - 1, urlHelper);
                tag.InnerHtml.AppendHtml(prevItem);
            }

            tag.InnerHtml.AppendHtml(currentItem);

            if (PageModel.HasNextPage && PageModel.PageNo < PageModel.TotalPages - 1)
            {
                TagBuilder nextItem = CreateTag(PageModel.PageNo + 1, urlHelper);
                tag.InnerHtml.AppendHtml(nextItem);
            }

            if (PageModel.PageNo != PageModel.TotalPages)
            {
                var lastPage = CreateTag(PageModel.TotalPages, urlHelper);
                tag.InnerHtml.AppendHtml(lastPage);
            }

            output.Content.AppendHtml(tag);

        }

        private TagBuilder CreateTag(int pageNumber, IUrlHelper urlHelper, string text = null)
        {
            TagBuilder item = new TagBuilder("li");
            TagBuilder link = new TagBuilder("a");
            if (pageNumber == PageModel.PageNo)
            {
                item.AddCssClass("active");
            }
            else
            {
                PageUrlValues["page"] = pageNumber;
                link.Attributes["href"] = urlHelper.Action(PageAction, PageUrlValues);
            }
            link.InnerHtml.Append(text ?? pageNumber.ToString());
            item.InnerHtml.AppendHtml(link);
            return item;
        }
    }
}
