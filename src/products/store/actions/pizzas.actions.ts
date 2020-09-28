import {Action} from "@ngrx/store";
import {Pizza} from "../../models/pizza.model";

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Failed';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Failed';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';

export const DELETE_PIZZA = '[Products] Delete Pizza';
export const DELETE_PIZZA_FAIL = '[Products] Delete Pizza Failed';
export const DELETE_PIZZA_SUCCESS = '[Products] Delete Pizza Success';

export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Failed';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';


// load pizzas
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

// update pizza
export class UpdatePizza implements Action {
  public readonly type = UPDATE_PIZZA;

  constructor(public payload: Pizza) {
  }
}

export class UpdatePizzaFail implements Action {
  public readonly type = UPDATE_PIZZA_FAIL;

  constructor(public payload: any) {
  }
}

export class UpdatePizzaSuccess implements Action {
  public readonly type = UPDATE_PIZZA_SUCCESS;

  constructor(public payload: Pizza) {
  }
}

// create pizza
export class CreatePizza implements Action {
  public readonly type = CREATE_PIZZA;

  constructor(public payload: Pizza) {
  }
}

export class CreatePizzaSuccess implements Action {
  public readonly type = CREATE_PIZZA_SUCCESS;

  constructor(public payload: Pizza) {
  }
}

export class CreatePizzaFail implements Action {
  public readonly type = CREATE_PIZZA_FAIL;

  constructor(public payload: any) {
  }
}

// delete pizza
export class DeletePizza implements Action {
  public readonly type = DELETE_PIZZA;

  constructor(public payload: Pizza) {
  }
}

export class DeletePizzaSuccess implements Action {
  public readonly type = DELETE_PIZZA_SUCCESS;

  constructor(public payload: Pizza) {
  }
}

export class DeletePizzaFail implements Action {
  public readonly type = DELETE_PIZZA_FAIL;

  constructor(public payload: any) {
  }
}

export type PizzasActions =
  LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | DeletePizza
  | DeletePizzaFail
  | DeletePizzaSuccess
