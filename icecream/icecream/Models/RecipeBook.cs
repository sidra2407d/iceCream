using System;
using System.Collections.Generic;

namespace icecream.Models;

public partial class RecipeBook
{
    public int BookId { get; set; }

    public string? BookName { get; set; }

    public string? Description { get; set; }

    public decimal? Price { get; set; }

    public string? ImagePath { get; set; }

    public virtual ICollection<BookOrder> BookOrders { get; set; } = new List<BookOrder>();
}
