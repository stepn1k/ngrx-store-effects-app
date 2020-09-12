import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as pizzaActions from '../actions/pizzas.actions';
import {PizzasService} from "../../services";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";


@Injectable()
export class PizzasEffects {

  constructor(private actions$: Actions, private pizzasService: PizzasService) {
  }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      )
    })
  )
}
