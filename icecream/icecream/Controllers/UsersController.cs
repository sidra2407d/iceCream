using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using icecream.Models;

namespace icecream.Controllers
{
    public class UsersController : Controller
    {
        private readonly IceCreamParlourDbContext _context;

        public UsersController(IceCreamParlourDbContext context)
        {
            _context = context;
        }

        // GET: Users
        public async Task<IActionResult> Index()
        {
            if (_context?.Users == null)
                return View(new List<User>());

            var users = await _context.Users
                                      .AsNoTracking()
                                      .ToListAsync();

            return View(users);
        }

        // GET: Users/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var user = await _context.Users
                                     .FirstOrDefaultAsync(m => m.UserId == id);

            if (user == null) return NotFound();

            return View(user);
        }

        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(User user)
        {
            if (!ModelState.IsValid)
                return View(user);

            user.CreatedAt ??= DateTime.UtcNow;
            user.Role = "User";

            if (!string.IsNullOrWhiteSpace(user.Password))
                user.Password = HashPassword(user.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return RedirectToAction("Login", "Users");
        }

        // GET: Users/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            return View(user);
        }

        // POST: Users/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, User user)
        {
            if (id != user.UserId) return NotFound();
            if (!ModelState.IsValid) return View(user);

            var userDb = await _context.Users.FindAsync(id);
            if (userDb == null) return NotFound();

            userDb.FullName = user.FullName;
            userDb.Email = user.Email;
            userDb.Phone = user.Phone;
            userDb.Address = user.Address;
            userDb.MembershipType = user.MembershipType;
            userDb.MembershipAmount = user.MembershipAmount;
            userDb.PaymentStatus = user.PaymentStatus;

            if (!string.IsNullOrWhiteSpace(user.Password))
                userDb.Password = HashPassword(user.Password);

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        // GET: Users/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var user = await _context.Users
                                     .FirstOrDefaultAsync(m => m.UserId == id);

            if (user == null) return NotFound();

            return View(user);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }

        // LOGIN
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login(string Email, string Password)
        {
            var hashedPassword = HashPassword(Password);

            var user = _context.Users
                               .FirstOrDefault(x => x.Email == Email && x.Password == hashedPassword);

            if (user != null)
            {
                // Session values
                HttpContext.Session.SetString("Username", user.FullName ?? "");
                HttpContext.Session.SetString("Role", user.Role ?? "User");

                // 🔑 Role based redirect
                if (user.Role == "Admin")
                {
                    return RedirectToAction("Index", "Dashboard");
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }

            ViewBag.Error = "Invalid Email or Password";
            return View();
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }

        // HELPERS
        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }

        private string HashPassword(string password)
        {
            if (string.IsNullOrEmpty(password)) return string.Empty;
            var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(bytes);
        }
    }
}
