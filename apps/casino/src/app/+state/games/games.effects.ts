import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { GamesService } from '../../services/games.service';
import { GamesActions, GamesSelectors } from './index';

@Injectable()
export class GamesGamesEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.load),
      withLatestFrom(this.store.select(GamesSelectors.loaded)),
      filter(([, loaded]) => !loaded),
      switchMap(() =>
        this.gamesApi
          .getAll()
          .pipe(map((games) => GamesActions.loadSucces({ games })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly gamesApi: GamesService
  ) {}
}
