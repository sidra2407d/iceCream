using System.Diagnostics;
using icecream.Models;
using Microsoft.AspNetCore.Mvc;

namespace icecream.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }


        public IActionResult About()
        {
            return View();
        }

        public IActionResult Flavours()
        {
            return View();
        }
       


        public IActionResult Blog()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult Feedback()
        {
            return View();
        }
        public IActionResult Faq()
        {
            return View();
        }
        public IActionResult Gallery()
        {
            return View();
        }
        public IActionResult OurTeam()
        {
            return View();
        }


        public IActionResult recipies()
        {
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }
      
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
