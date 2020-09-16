import * as fromToppings from '../actions/toppings.actions';
import {Topping} from "../../models/topping.model";

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean,
  loading: boolean
  selectedToppings: number[]
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: []
};

export const toppingsReducer = (
  state = initialState,
  action: fromToppings.ToppingsActions
): ToppingsState => {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS:
      return {
        ...state,
        loading: true
      };
    case fromToppings.LOAD_TOPPINGS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false
      };
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping,
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
    case fromToppings.VISUALISE_TOPPINGS: {
      return {
        ...state,
        selectedToppings: action.payload
      }
    }
    default:
      return state
  }
};


export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
