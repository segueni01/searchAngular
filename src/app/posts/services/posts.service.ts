import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  private urlUsers: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  
  getPosts(){
    return this.http.get(this.url)
  }

  getUsers(){
    return this.http.get(this.urlUsers)
  }


}
