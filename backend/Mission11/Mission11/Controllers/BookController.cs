using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission11.Data;

namespace Mission11.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {

        private BookDbContext _bookContext;


        public BookController(BookDbContext temp) => _bookContext = temp;


        [HttpGet("AllBooks")]
        public IEnumerable<Book> GetBooks()
        {
            var something = _bookContext.Books.ToList();
            return something;
        }

        [HttpGet("FunctionalBooks")]
        public IEnumerable<Book> GetFunctionalBooks()
        {
            var something = _bookContext.Books.Where(p => p.Category == "Functional").ToList();
            return something;
        }
    }

}

