import { Phrase } from './phrase.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  baseUrl = 'http://localhost:3001/phrase';
  constructor(private http: HttpClient) {}

  read(): Observable<Phrase[]> {
    return this.http.get<Phrase[]>(this.baseUrl);
  }
}
