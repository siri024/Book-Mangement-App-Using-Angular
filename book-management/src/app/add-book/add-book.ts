import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.scss',
})
export class AddBook {
  book: IBook = {
    id: '',
    title: '',
    subtitle: '',
    authors: '',
    image: '',
    publishedDate: '',
    description: 'No description available.',
    category: 'General',
    publisher: 'Unknown',
    pages: 0,
    language: 'English',
    rating: 0,
    price: 0,
  };

  constructor(private bookService: BookService, public router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.bookService.createBook(this.book).subscribe({
      next: () => {
        alert('Book created');
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to create book');
      },
    });
  }
}
