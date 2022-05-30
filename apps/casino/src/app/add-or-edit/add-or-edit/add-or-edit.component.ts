import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  filter,
  map,
  Observable,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import { GamesActions, GamesSelectors } from '../../+state/games';
import { FakeApiService } from '../../services/fake-api.service';
import { DynamicForm } from '../../shared/models/dynamic-form';
import { Game } from '../../shared/models/game';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.scss'],
})
export class AddOrEditComponent implements OnDestroy {
  dynamicForm$: Observable<DynamicForm>;
  game$: Observable<Game | undefined> = this.store.select(
    GamesSelectors.getSelected
  );
  username$: Observable<string>;
  private routeSub: Subscription;
  private destroy$$: Subject<void> = new Subject<void>();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private store: Store,
    private fakeApi: FakeApiService,
    private router: Router
  ) {
    this.dynamicForm$ = this.http.get<DynamicForm>('/assets/meta.json');
    this.username$ = this.fakeApi.username$;

    this.routeSub = this.route.params
      .pipe(
        takeUntil(this.destroy$$),
        map((params: any) => params['id'])
      )
      .subscribe((id: number) => {
        this.store.dispatch(GamesActions.selectGame({ id }));
      });

    this.store.dispatch(GamesActions.load());
  }

  onSaveGame(game: Game) {
    this.store.dispatch(GamesActions.saveGame({ game }));
    this.router.navigateByUrl('/games');
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
