using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace icecream.Models;

public partial class IceCreamParlourDbContext : DbContext
{
    public IceCreamParlourDbContext()
    {
    }

    public IceCreamParlourDbContext(DbContextOptions<IceCreamParlourDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Feedback> Feedbacks { get; set; }
    public virtual DbSet<Recipe> Recipes { get; set; }
    public virtual DbSet<Admin> Admins { get; set; }
    public virtual DbSet<BookOrder> BookOrders { get; set; }
    public virtual DbSet<RecipeBook> RecipeBooks { get; set; }
    public virtual DbSet<ContactU> ContactUs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {


        }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CCAC8DAB4C2D");

            entity.HasIndex(e => e.Email, "UQ__Users__A9D10534B76AB6F7").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FullName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.MembershipAmount).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.MembershipType)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PaymentStatus)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("role")
                .HasDefaultValue("User")
                .IsRequired();
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.FeedbackId);

            entity.Property(e => e.FeedbackId).HasColumnName("FeedbackID");
            entity.Property(e => e.FeedbackDate).HasColumnType("datetime");

            entity.HasOne(d => d.User).WithMany().HasForeignKey(d => d.UserId).HasConstraintName("FK_Feedbacks_Users");
        });

        modelBuilder.Entity<Recipe>(entity =>
        {
            entity.HasKey(e => e.RecipeId);

            entity.Property(e => e.RecipeId).HasColumnName("RecipeID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.AddedByAdminNavigation).WithMany(p => p.Recipes).HasForeignKey(d => d.AddedByAdmin).HasConstraintName("FK_Recipes_Admins");
        });

        modelBuilder.Entity<RecipeBook>(entity =>
        {
            entity.HasKey(e => e.BookId);

            entity.Property(e => e.BookId).HasColumnName("BookID");
            entity.Property(e => e.BookName).HasMaxLength(200).IsUnicode(false);
            entity.Property(e => e.ImagePath).HasMaxLength(255).IsUnicode(false);

            entity.HasMany(e => e.BookOrders).WithOne(e => e.Book).HasForeignKey(e => e.BookId).HasConstraintName("FK_BookOrders_RecipeBooks");
        });

        modelBuilder.Entity<BookOrder>(entity =>
        {
            entity.HasKey(e => e.OrderId);

            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.Cost).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.OrderDate).HasColumnType("datetime");

            entity.HasOne(d => d.Book).WithMany(p => p.BookOrders).HasForeignKey(d => d.BookId).HasConstraintName("FK_BookOrders_RecipeBooks");
            entity.HasOne(d => d.User).WithMany().HasForeignKey(d => d.UserId).HasConstraintName("FK_BookOrders_Users");
        });

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.AdminId);

            entity.Property(e => e.AdminId).HasColumnName("AdminID");
            entity.Property(e => e.AdminName).HasMaxLength(100).IsUnicode(false);

            entity.HasMany(e => e.Recipes).WithOne(e => e.AddedByAdminNavigation).HasForeignKey(e => e.AddedByAdmin).HasConstraintName("FK_Recipes_Admins");
        });

        modelBuilder.Entity<ContactU>(entity =>
        {
            entity.HasKey(e => e.ContactId);

            entity.Property(e => e.ContactId).HasColumnName("ContactID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    // Ensure newly added User entities have a Role set (server-side fallback)
    public override int SaveChanges()
    {
        SetDefaultUserRoles();
        return base.SaveChanges();
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        SetDefaultUserRoles();
        return base.SaveChangesAsync(cancellationToken);
    }

    private void SetDefaultUserRoles()
    {
        var addedUsers = ChangeTracker.Entries<User>()
            .Where(e => e.State == EntityState.Added)
            .Select(e => e.Entity);

        foreach (var u in addedUsers)
        {
            if (string.IsNullOrWhiteSpace(u.Role))
                u.Role = "User";
        }
    }
}
