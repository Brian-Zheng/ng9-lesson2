import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) {}

  list: any[];

  loadArticles() {
    this.httpClient.get('http://localhost:3000/articles/').subscribe((response: any) => {
      this.list = response.articles;
    });
  }
  getArticles(): Observable<any[]> {
    return this.httpClient.get('https://conduit.productionready.io/api/articles').pipe(map((response: any) => response.articles));
  }
}
