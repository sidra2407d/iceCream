using System;
using System.Collections.Generic;

namespace icecream.Models;

public partial class BookOrder
{
    public int OrderId { get; set; }

    public int? UserId { get; set; }

    public string? CustomerName { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? Address { get; set; }

    public int? BookId { get; set; }

    public decimal? Cost { get; set; }

    public string? PaymentMethod { get; set; }

    public string? PaymentStatus { get; set; }

    public string? OrderStatus { get; set; }

    public DateTime? OrderDate { get; set; }

    public virtual RecipeBook? Book { get; set; }

    public virtual User? User { get; set; }
}
