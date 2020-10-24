import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  template: ` <div>
                <h3>{{ post?.title }}</h3>
                <p>{{ post?.body }}</p>
              </div>`,
})
export class PostComponent implements OnInit {
  constructor(private http: HttpClient) {}
  post: any;
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((res) => {
      this.post = res;
    });
  }
}
