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
    // load pizza
    case fromPizzas.LOAD_PIZZAS:
      return {...state, loading: true};
    // load fail
    case fromPizzas.LOAD_PIZZAS_FAIL:
      return {...state, loaded: false, loading: false};
    // load success
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;

      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {...entities, [pizza.id]: pizza};
        }, {...state.entities}
      );
      return {...state, loading: false, loaded: true, entities};
    }
    // create pizza success or update pizza
    case fromPizzas.UPDATE_PIZZA_SUCCESS:
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {...state.entities, [pizza.id]: pizza};
      return {...state, entities};
    }
    // delete pizza
    case fromPizzas.DELETE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const {[pizza.id]: removed, ...entities} = state.entities;

      return {
        ...state,
        entities
      }
    }
    // DEFAULT State
    default:
      return state
  }
};


export const getPizzasEntities = (state: PizzasState) => state.entities;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzasLoading = (state: PizzasState) => state.loading;
