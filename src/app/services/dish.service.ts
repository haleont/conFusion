import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from "../shared/baseURL"
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient ) { }

  gerDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }
  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/dish' + id);
  }
  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true')
    .pipe(map(dishes => dishes[0]));
  }
  getDishIds(): Observable<string[] | any> {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true')
    .pipe(map(dish => dish.id ));
  }
}
