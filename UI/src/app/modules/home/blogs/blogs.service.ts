import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogsService {
  constructor(private http: HttpClient) {}

  fetchBlogs(query: string) {
    return this.http.get(
      `http://newsapi.org/v2/everything?q=coding&apiKey=4127e76ea1294af59dd2228a6ea84557`
    );
  }
}
