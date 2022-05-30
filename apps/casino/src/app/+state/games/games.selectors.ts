import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GAMES_FEATURE_KEY, State, gamesAdapter } from './games.reducer';

// Lookup the 'GamesGames' feature state managed by NgRx
export const getGamesState = createFeatureSelector<State>(GAMES_FEATURE_KEY);

const { selectAll, selectEntities } = gamesAdapter.getSelectors();

export const getSelectedId = createSelector(
  getGamesState,
  ({ selectedId }) => selectedId
);

export const getGameEntities = createSelector(getGamesState, (state: State) =>
  selectEntities(state)
);

export const getSelected = createSelector(
  getGameEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const getAllGames = createSelector(getGamesState, (state: State) =>
  selectAll(state)
);

export const loaded = createSelector(getGamesState, ({ loaded }) => loaded);

export const getError = createSelector(
  getGamesState,
  (state: State) => state.error
);
