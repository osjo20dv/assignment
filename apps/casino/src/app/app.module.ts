import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import * as fromGamesGames from './+state/games/games.reducer';
import { GamesGamesEffects } from './+state/games/games.effects';
import { AppRoutingModule } from './app-routing.module';
import { AddOrEditModule } from './add-or-edit/add-or-edit.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([GamesGamesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    GamesModule,
    AddOrEditModule,
    StoreModule.forFeature(
      fromGamesGames.GAMES_FEATURE_KEY,
      fromGamesGames.reducer
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
