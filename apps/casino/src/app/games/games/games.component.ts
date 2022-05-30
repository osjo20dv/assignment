import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GamesActions, GamesSelectors } from '../../+state/games';
import { Game } from '../../shared/models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  games$ = this.store.select(GamesSelectors.getAllGames);

  constructor(private store: Store) {
    this.store.dispatch(GamesActions.load());
  }
}
