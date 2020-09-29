import {CanActivate} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromStore from '../store'
import {Observable} from "rxjs";
import {catchError, filter, switchMap, take, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {Injectable} from "@angular/core";

@Injectable()
export class PizzasGuard implements CanActivate {

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore() {
    return this.store.select(fromStore.getPizzasLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPizzas());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
