import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish'
import { DISHES } from '../shared/dishes'
import { DishService } from '../services/dish.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  constructor(private dishService: DishService, @Inject('BaseURL') private BaseURL) {}

  ngOnInit(): void {
    this.dishService.gerDishes().subscribe(dishes => this.dishes = dishes);
  }
}
