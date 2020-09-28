import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as pizzaActions from '../actions/pizzas.actions';
import * as fromRoot from "../../../app/store"
import {PizzasService} from "../../services";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";


@Injectable()
export class PizzasEffects {

  constructor(private actions$: Actions, private pizzasService: PizzasService) {
  }

  // load pizzas
  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      )
    })
  );

  // create pizza
  @Effect()
  createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA).pipe(
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzasService.createPizza(pizza).pipe(
        map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
        catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
      )
    })
  );

  @Effect()
  createPizzaSuccess = this.actions$.ofType(pizzaActions.CREATE_PIZZA_SUCCESS).pipe(
    map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
    map((pizza) => {
      return new fromRoot.Go({path: ['/products', pizza.id]})
    })
  );

  // update pizza
  @Effect()
  updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
    map((action: pizzaActions.UpdatePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzasService.updatePizza(pizza).pipe(
        map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
        catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
      )
    })
  );

  // delete pizza
  @Effect()
  deletePizza$ = this.actions$.ofType(pizzaActions.DELETE_PIZZA).pipe(
    map((action: pizzaActions.DeletePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzasService.removePizza(pizza).pipe(
        map(() => new pizzaActions.DeletePizzaSuccess(pizza)),
        catchError(error => of(new pizzaActions.DeletePizzaFail(error)))
      )
    })
  );


  @Effect()
  handlePizzaSuccess$ = this.actions$
    .ofType(
      pizzaActions.DELETE_PIZZA_SUCCESS,
      pizzaActions.UPDATE_PIZZA_SUCCESS)
    .pipe(
      map(() => {
        return new fromRoot.Go({path: ['/products']})
      })
    );

}
