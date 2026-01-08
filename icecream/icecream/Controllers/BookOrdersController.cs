using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using icecream.Models;

namespace icecream.Controllers
{
    public class BookOrdersController : Controller
    {
        private readonly IceCreamParlourDbContext _context;

        public BookOrdersController(IceCreamParlourDbContext context)
        {
            _context = context;
        }

        // GET: BookOrders
        public async Task<IActionResult> Index()
        {
            var iceCreamParlourDbContext = _context.BookOrders.Include(b => b.Book).Include(b => b.User);
            return View(await iceCreamParlourDbContext.ToListAsync());
        }

        // GET: BookOrders/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bookOrder = await _context.BookOrders
                .Include(b => b.Book)
                .Include(b => b.User)
                .FirstOrDefaultAsync(m => m.OrderId == id);
            if (bookOrder == null)
            {
                return NotFound();
            }

            return View(bookOrder);
        }

        // GET: BookOrders/Create
        public IActionResult Create()
        {
            ViewData["BookId"] = new SelectList(_context.RecipeBooks, "BookId", "BookId");
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "UserId");
            return View();
        }

        // POST: BookOrders/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("OrderId,UserId,CustomerName,Email,Phone,Address,BookId,Cost,PaymentMethod,PaymentStatus,OrderStatus,OrderDate")] BookOrder bookOrder)
        {
            if (ModelState.IsValid)
            {
                _context.Add(bookOrder);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["BookId"] = new SelectList(_context.RecipeBooks, "BookId", "BookId", bookOrder.BookId);
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "UserId", bookOrder.UserId);
            return View(bookOrder);
        }

        // GET: BookOrders/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bookOrder = await _context.BookOrders.FindAsync(id);
            if (bookOrder == null)
            {
                return NotFound();
            }
            ViewData["BookId"] = new SelectList(_context.RecipeBooks, "BookId", "BookId", bookOrder.BookId);
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "UserId", bookOrder.UserId);
            return View(bookOrder);
        }

        // POST: BookOrders/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("OrderId,UserId,CustomerName,Email,Phone,Address,BookId,Cost,PaymentMethod,PaymentStatus,OrderStatus,OrderDate")] BookOrder bookOrder)
        {
            if (id != bookOrder.OrderId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(bookOrder);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BookOrderExists(bookOrder.OrderId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["BookId"] = new SelectList(_context.RecipeBooks, "BookId", "BookId", bookOrder.BookId);
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "UserId", bookOrder.UserId);
            return View(bookOrder);
        }

        // GET: BookOrders/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bookOrder = await _context.BookOrders
                .Include(b => b.Book)
                .Include(b => b.User)
                .FirstOrDefaultAsync(m => m.OrderId == id);
            if (bookOrder == null)
            {
                return NotFound();
            }

            return View(bookOrder);
        }

        // POST: BookOrders/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var bookOrder = await _context.BookOrders.FindAsync(id);
            if (bookOrder != null)
            {
                _context.BookOrders.Remove(bookOrder);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BookOrderExists(int id)
        {
            return _context.BookOrders.Any(e => e.OrderId == id);
        }
    }
}
