using System;
using System.Collections.Generic;

namespace icecream.Models;

public partial class Recipe
{
    public int RecipeId { get; set; }

    public string? FlavorName { get; set; }

    public string? Ingredients { get; set; }

    public string? RecipeProcedure { get; set; }

    public string? ImagePath { get; set; }

    public int? AddedByAdmin { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual Admin? AddedByAdminNavigation { get; set; }
}
