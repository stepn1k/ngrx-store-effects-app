import {PizzasGuard} from "./pizza.guard";
import {PizzaExistsGuards} from "./pizza-exists.guard";
import {ToppingsGuard} from "./toppings.guard";

export const guards: any[] = [PizzasGuard, PizzaExistsGuards, ToppingsGuard];

export * from "./pizza.guard"
export * from './pizza-exists.guard'
export * from "./toppings.guard"
