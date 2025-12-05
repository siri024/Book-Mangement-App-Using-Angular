import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss',
})
export class BookDetails implements OnInit {
  book: IBook | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'No book id found in URL';
      this.isLoading = false;
      return;
    }

    this.bookService.getBookDetails(id).subscribe({
      next: (data) => {
        this.book = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load book details';
        this.isLoading = false;
        console.error(err);
      },
    });
  }

  deleteBook(): void {
    if (!this.book) return;

    if (!confirm('Are you sure you want to delete this book?')) {
      return;
    }

    this.bookService.deleteBook(this.book.id).subscribe({
      next: () => {
        alert('Book deleted');
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to delete book');
      },
    });
  }
}
