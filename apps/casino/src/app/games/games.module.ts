import { NgModule } from '@angular/core';

import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { GameSectionComponent } from './game-section/game-section.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GamesComponent, GameComponent, GameSectionComponent],
  exports: [GamesComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
})
export class GamesModule {}
