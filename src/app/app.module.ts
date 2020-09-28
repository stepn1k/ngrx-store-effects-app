import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
// not used in production
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze';
// bootstrap
import {AppComponent} from './containers/app/app.component';
// reducers
import {CustomSerializer, reducers} from "./store/reducers";
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {effects} from "./store/effects";


// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

// routes
export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {
    path: 'products',
    loadChildren: '../products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
