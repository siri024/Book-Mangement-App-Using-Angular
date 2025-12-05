import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly baseUrl = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.baseUrl);
  }

  getBookDetails(id: string): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.baseUrl}/${id}`);
  }

  deleteBook(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(this.baseUrl, book);
  }
}
