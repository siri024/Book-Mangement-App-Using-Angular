import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book-service';
import { Router } from '@angular/router';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookCard],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {
  books: IBook[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load books';
        this.isLoading = false;
        console.error(err);
      },
    });
  }

  onBookSelected(book: IBook) {
    this.router.navigate(['books', book.id]);
  }
}
