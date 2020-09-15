import {Action} from "@ngrx/store";
import {Topping} from "../../models/topping.model";

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Failed';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';


export class LoadToppings implements Action {
  public readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  public readonly type = LOAD_TOPPINGS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadToppingsSuccess implements Action {
  public readonly type = LOAD_TOPPINGS_SUCCESS;

  constructor(public payload: Topping[]) {
  }
}

export type ToppingsActions = LoadToppings | LoadToppingsFail | LoadToppingsSuccess
