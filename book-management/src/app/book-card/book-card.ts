import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  [x: string]: any;
  @Input() book!: IBook;
  @Output() select = new EventEmitter<IBook>();

  onClick() {
    this.select.emit(this.book);
  }
}
