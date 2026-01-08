using System;
using System.Collections.Generic;

namespace icecream.Models;

public partial class Feedback
{
    public int FeedbackId { get; set; }

    public int? UserId { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? Message { get; set; }

    public DateTime? FeedbackDate { get; set; }

    public virtual User? User { get; set; }
}
