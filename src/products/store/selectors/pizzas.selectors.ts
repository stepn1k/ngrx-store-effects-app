import {createSelector} from "@ngrx/store";
import * as fromPizzas from "../reducers/pizzas.reducer";
import * as fromToppings from '../selectors/toppings.selectors'
import {getProductsState, ProductsState} from "../reducers";
import * as fromRoot from "../../../app/store";
import {Pizza} from "../../models/pizza.model";

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(getPizzasEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);

export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);

export const getPizzaVisualised = createSelector(
  getSelectedPizza,
  fromToppings.getToppingsEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingsEntity, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingsEntity[id]);
    return {
      ...pizza, toppings
    }
  }
);
