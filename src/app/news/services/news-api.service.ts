import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = '6f12c4438a3f4e0d9f3af7067cf04deb';
  baseUrl = 'https://newsapi.org/v2';
  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }
}