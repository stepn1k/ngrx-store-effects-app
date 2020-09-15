import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../models/pizza.model';
import {Topping} from '../../models/topping.model';
import {Store} from "@ngrx/store";
import * as fromStore from '../../store'
import {Observable} from "rxjs";

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
      <div
              class="product-item">
          <pizza-form
                  [pizza]="pizza$ | async"
                  [toppings]="toppings$ | async"
                  (selected)="onSelect($event)"
                  (create)="onCreate($event)"
                  (update)="onUpdate($event)"
                  (remove)="onRemove($event)">
              <pizza-display
                      [pizza]="visualise">
              </pizza-display>
          </pizza-form>
      </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings$: Observable<Topping[]>;

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadPizzas());
    this.store.dispatch(new fromStore.LoadToppings());
    this.pizza$ = this.store.select(fromStore.getSelectedPizza);
    this.toppings$ = this.store.select(fromStore.getAllToppings);
  }

  onSelect(event: number[]) {
  }

  onCreate(event: Pizza) {

  }

  onUpdate(event: Pizza) {

  }

  onRemove(event: Pizza) {
  }
}
