import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditComponent } from './add-or-edit/add-or-edit/add-or-edit.component';
import { GamesComponent } from './games/games/games.component';

export const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'add-or-edit',
    component: AddOrEditComponent,
  },
  {
    path: 'add-or-edit/:id',
    component: AddOrEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
