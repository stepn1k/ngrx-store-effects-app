import {Action} from "@ngrx/store";
import {Pizza} from "../../models/pizza.model";

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Failed';
export const LOAD_PIZZAS_SUCCESS = '[Product] Load Pizzas Success';


export class LoadPizzas implements Action {
  public readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  public readonly type = LOAD_PIZZAS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadPizzasSuccess implements Action {
  public readonly type = LOAD_PIZZAS_SUCCESS;

  constructor(public payload: Pizza[]) {
  }
}

export type PizzasActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess
