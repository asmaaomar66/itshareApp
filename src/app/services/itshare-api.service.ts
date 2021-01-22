import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItshareApiService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  posts: any = [];

  constructor(private http: HttpClient) { }

  // getPost(callBack:any){

  //   return this.http.get(this.url).subscribe(respons=>{
  //     callBack(respons);
  //   });
  // }

  getPosts(){

    return this.http.get(this.url);
  }

createPost(post: any){

  return this.http.post(this.url, post);
}
// `${this.url}tickets/get?id=` + id
// HTTP Update Object
updatePost(post: any){
  return this.http.put(this.url + '/' + post.id, post);
}

deletePost(post: any){

  return this.http.delete(this.url + '/' + post.id);

}

}
