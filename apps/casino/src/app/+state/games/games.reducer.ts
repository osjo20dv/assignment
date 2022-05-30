import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { GamesActions } from '.';
import { Game } from '../../shared/models/game';

export const GAMES_FEATURE_KEY = 'gamesGames';

export interface State extends EntityState<Game> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export const gamesAdapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const initialState: State = gamesAdapter.getInitialState({
  loaded: false,
});

const gamesGamesReducer = createReducer(
  initialState,
  on(GamesActions.load, (state) => ({
    ...state,
    error: null,
  })),
  on(GamesActions.loadSucces, (state, { games }) =>
    gamesAdapter.setAll(games, { ...state, loaded: true })
  ),
  on(GamesActions.loadFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GamesActions.selectGame, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  on(GamesActions.saveGame, (state, { game }) =>
    gamesAdapter.setOne(game, { ...state, selectedId: game.id })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return gamesGamesReducer(state, action);
}
