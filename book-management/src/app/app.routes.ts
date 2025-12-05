import { Routes } from '@angular/router';
import { BookList } from './book-list/book-list';
import { AddBook } from './add-book/add-book';
import { BookDetails } from './book-details/book-details';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookList },
  { path: 'add-book', component: AddBook },
  { path: 'books/:id', component: BookDetails },
];
