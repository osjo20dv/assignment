import { Component } from '@angular/core';

interface Url {
  link: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  urls: Url[] = [
    { link: '/add-or-edit', text: 'Add Game' },
    { link: '/games', text: 'Games' },
  ];
}
