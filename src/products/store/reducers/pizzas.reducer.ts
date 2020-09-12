import {Pizza} from "../../models/pizza.model";
import * as fromPizzas from '../actions/pizzas.actions';

export interface PizzasState {
  entities: { [id: number]: Pizza };
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzasState = {
  entities: {},
  loaded: false,
  loading: false
};


export const pizzasReducer = (
  state = initialState,
  action: fromPizzas.PizzasActions
): PizzasState => {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS:
      return {
        ...state,
        loading: true
      };
    case fromPizzas.LOAD_PIZZAS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false
      };
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;

      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    default:
      return state
  }
};


export const getPizzasEntities = (state: PizzasState) => state.entities;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzasLoading = (state: PizzasState) => state.loading;
