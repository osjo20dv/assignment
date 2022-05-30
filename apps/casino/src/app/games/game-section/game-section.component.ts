import { Component, Input } from '@angular/core';
import { Game } from '../../shared/models/game';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss'],
})
export class GameSectionComponent {
  @Input() name = 'Game section';
  @Input() games: Game[] | null = [];
}
