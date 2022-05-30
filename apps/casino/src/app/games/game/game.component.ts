import { Component, Input } from '@angular/core';
import { Game } from '../../shared/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() game: Game | null = null;
}
