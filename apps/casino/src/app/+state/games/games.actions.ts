import { createAction, props } from '@ngrx/store';
import { Game } from '../../shared/models/game';

export const load = createAction('[Games] load');

export const loadSucces = createAction(
  '[Games] Load Games Success',
  props<{ games: Game[] }>()
);

export const loadFailure = createAction(
  '[Game] Load Games Failure',
  props<{ error: any }>()
);

export const saveGame = createAction(
  '[Games] Save Game Success',
  props<{ game: Game }>()
);

export const selectGame = createAction(
  '[Game] Select Game',
  props<{ id: number | undefined }>()
);
