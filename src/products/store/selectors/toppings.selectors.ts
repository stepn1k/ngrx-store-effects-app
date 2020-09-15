import {getProductsState, ProductsState} from "../reducers";
import {createSelector} from "@ngrx/store";
import * as fromToppings from "../reducers/toppings.reducer"


export const getToppingsState = createSelector(
  getProductsState,
  (state: ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
);

export const getAllToppings = createSelector(getToppingsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
