using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/News")]
    public class ApiNewsItemsController : ApiController
    {
        private readonly INewsService _newsService;

        public ApiNewsItemsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet]
        [Route("List")]
        public async Task<PageableData<NewsMiniDto>> GetNewsItems(int page = 1, int? categoryId = null)
        {
            return await _newsService.GetDtoAllAsync(page, categoryId);
        }

        [HttpGet]
        [Route("Info")]
        [ResponseType(typeof(NewsItemDto))]
        public async Task<IHttpActionResult> GetNewsItem(int id)
        {
            var model = await _newsService.GetDtoAsync(id);
            return Ok(model);
        }

        //// PUT: api/NewsItems/5
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutNewsItem(int id, NewsItem newsItem)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != newsItem.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(newsItem).State = EntityState.Modified;

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!NewsItemExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/NewsItems
        //[ResponseType(typeof(NewsItem))]
        //public async Task<IHttpActionResult> PostNewsItem(NewsItem newsItem)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.NewsItems.Add(newsItem);
        //    await db.SaveChangesAsync();

        //    return CreatedAtRoute("DefaultApi", new { id = newsItem.Id }, newsItem);
        //}

        //// DELETE: api/NewsItems/5
        //[ResponseType(typeof(NewsItem))]
        //public async Task<IHttpActionResult> DeleteNewsItem(int id)
        //{
        //    NewsItem newsItem = await db.NewsItems.FindAsync(id);
        //    if (newsItem == null)
        //    {
        //        return NotFound();
        //    }

        //    db.NewsItems.Remove(newsItem);
        //    await db.SaveChangesAsync();

        //    return Ok(newsItem);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool NewsItemExists(int id)
        //{
        //    return db.NewsItems.Count(e => e.Id == id) > 0;
        //}
    }
}