using Microsoft.AspNetCore.Mvc;

namespace icecream.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Orders()
        {
            return View();
        }

        public IActionResult Recipe()
        {
            return View();
        }

        public IActionResult Settings()
        {
            return View();
        }
        public IActionResult Users()
        {
            return View();
        }

        public IActionResult Feedback()
        {
            return View();
        }

        public IActionResult Analytics()
        {
            return View();
        }
    }
}
