using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using MyLfc.Application.Infrastructure;

namespace MyLfc.Web.Mvc.TagHelpers;

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
    public PagedResultBase PageModel { get; set; }
    public string PageAction { get; set; }
    
    [HtmlAttributeName(DictionaryAttributePrefix = "page-url-")]
    public Dictionary<string, object> PageUrlValues { get; set; } = new Dictionary<string, object>();

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        IUrlHelper urlHelper = _urlHelperFactory.GetUrlHelper(ViewContext);
        output.TagName = "div";

        TagBuilder tag = new TagBuilder("ul");
        tag.AddCssClass("pagination");

        if (PageModel.CurrentPage != 1)
        {
            var firstPage = CreateTag(1, urlHelper);
            tag.InnerHtml.AppendHtml(firstPage);
        }

        TagBuilder currentItem = CreateTag(PageModel.CurrentPage, urlHelper);

        if (HasPreviousPage && PageModel.CurrentPage > 1)
        {
            TagBuilder prevItem = CreateTag(PageModel.CurrentPage - 1, urlHelper);
            tag.InnerHtml.AppendHtml(prevItem);
        }

        tag.InnerHtml.AppendHtml(currentItem);

        if (HasNextPage && PageModel.CurrentPage < PageModel.PageCount - 1)
        {
            TagBuilder nextItem = CreateTag(PageModel.CurrentPage + 1, urlHelper);
            tag.InnerHtml.AppendHtml(nextItem);
        }

        if (PageModel.CurrentPage != PageModel.PageCount)
        {
            var lastPage = CreateTag(PageModel.PageCount, urlHelper);
            tag.InnerHtml.AppendHtml(lastPage);
        }

        output.Content.AppendHtml(tag);
    }
    public bool HasPreviousPage => PageModel.CurrentPage > 1;

    public bool HasNextPage => PageModel.CurrentPage < PageModel.PageCount;

    private TagBuilder CreateTag(int pageNumber, IUrlHelper urlHelper, string text = null)
    {
        TagBuilder item = new TagBuilder("li");
        TagBuilder link = new TagBuilder("a");
        if (pageNumber == PageModel.CurrentPage)
        {
            item.AddCssClass("active");
        }
        else
        {
            PageUrlValues["currentPage"] = pageNumber;
            link.Attributes["href"] = urlHelper.Action(PageAction, PageUrlValues);
        }
        link.InnerHtml.Append(text ?? pageNumber.ToString());
        item.InnerHtml.AppendHtml(link);
        return item;
    }
}
