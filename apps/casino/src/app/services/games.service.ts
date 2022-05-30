import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DataRequest } from '../shared/models/data-request';
import { Game } from '../shared/models/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<DataRequest<Game>>('/assets/data.json')
      .pipe(map((request: DataRequest<Game>) => request.results));
  }
}
