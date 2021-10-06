import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';
import { ItemDetail } from './item-detail'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
        .pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Item[]>('getHeroes', []))
        );
  }

  getItem(id: number): Observable<ItemDetail> {
    const url = `${this.detailsUrl}/${id}.json`;
    return this.http.get<ItemDetail>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<ItemDetail>(`getHero id=${id}`))
    );
  }

  updateItem(hero: Item): Observable<any> {
    return this.http.put(this.itemsUrl, hero, this.httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  addItem(hero: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, hero, this.httpOptions).pipe(
        tap((newHero: Item) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Item>('addHero'))
    );
  }

  private itemsUrl = 'api/items.json'
  private detailsUrl = 'api/detail'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
