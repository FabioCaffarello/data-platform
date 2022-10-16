import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesApiService } from '@data-platform/article/data-access-api';
@Component({
  selector: 'data-platform-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles$ = this.articles.articleControllerGetAllArticles();

  constructor(private articles: ArticlesApiService) {}
}
