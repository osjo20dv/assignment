import { Injectable } from '@angular/core';
import { defer, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  username$ = defer(() => of('new user'));
}
