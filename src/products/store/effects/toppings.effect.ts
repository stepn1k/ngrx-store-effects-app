import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {ToppingsService} from "../../services";
import * as toppingActions from "../actions/toppings.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class ToppingsEffect {

  constructor(private actions$: Actions, private toppingsService: ToppingsService) {
  }

  @Effect()
  loadToppings$ = this.actions$.ofType(toppingActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(toppings => new toppingActions.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingActions.LoadToppingsFail(error)))
      )
    })
  )
}
