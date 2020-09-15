import * as fromPizzas from "./pizzas.reducer";
import * as fromToppings from "./toppings.reducer"
import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzasState
  toppings: fromToppings.ToppingsState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.pizzasReducer,
  toppings: fromToppings.toppingsReducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

