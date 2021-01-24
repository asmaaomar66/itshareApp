import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { interval, observable, fromEvent, from, of, pipe } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { TextValidator } from './validator.validation';
import { UniqnessValidator } from './validator/uniqness.validator';
// import * as Promise from 'bluebird';
import { HttpClient, HttpClientModule, } from '@angular/common/http';
import { ItshareApiService } from './services/itshare-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private postService: ItshareApiService){

  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get age(){
    return this.form.get('age');
  }
  title = 'itshareApp';

  posts: any = [];
  url = 'https://jsonplaceholder.typicode.com/posts';
  // favStat = true;
  // favChange(){
  //     console.log(this.favStat);
  // }


  // ngFor
  // persons : string [] = ['asmaa', 'esraa', 'asmahan', 'mohamed'];

  // ngFor Group By for Nested Array of Objects
  // peopleByCountry : any[] =
  // [
  //     {
  //       country: 'Egypt',
  //       names : [
  //         {
  //           name :'ITSHARE',
  //         },
  //         {
  //           name :'Training-Mansoura',
  //         },
  //       ]
  //     },
  //     {
  //       country: 'Turkey',
  //       names : [
  //         {
  //           name :'Asmaa',
  //         },
  //         {
  //           name :'Mohamed',
  //         },
  //         {
  //           name :'Asmahan',
  //         },
  //       ]
  //     },
  // ];

  // ngFor add and remove items and trackBy
  // courses=
  // [
  //   {id : 1 , courseName: 'java'},
  //   {id : 2 , courseName: 'python'},
  //   {id : 3 , courseName: 'css3'},
  //   {id : 4 , courseName: 'Blockchain'},
  // ];
  // trackByCourse(index:any, course:any){
  //   return course ? course.id : undefined;
  // }
  // onAdd(){
  //   this.courses.push({id : 5 , courseName: 'vue'});
  // }
  // onRemove(course : any){
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index,1);
  // }


  // ngSwitchCase
  // defaultView='Courses';

  // setView (selectedView:any){
  //   this.defaultView = selectedView;
  // }

  // ngStyle
  // whatColor = true;

  // template driven validation and ngForm and ngSubmit
  // logObj(email:any){
  //   console.log(email);
  // }
  // Submit(f:any){

  //   console.log(f);
  // }

  // Reactive form validation and ng2 validation
  form = new FormGroup({
    email : new FormControl('', [Validators.required], UniqnessValidator.shouldbeuniqness),
    password : new FormControl('', [TextValidator.noSpaceAllowed]),
    age : new FormControl('', CustomValidators.rangeLength([4, 20]))
  });

  // Stream and RXJS (function)=> {
 // 1-interval
 // 2-subscribe
 // 3-take
 // 4-map
  // }
  // Create an Observable out of a promise and  Subscribe to begin listening for async result
  // data = from(fetch('https://jsonplaceholder.typicode.com/posts')).subscribe({next(respons) {console.log(respons);}, error(err) {console.error('Error: ' + err);}, complete() { console.log('Completed');}});

// Create an Observable that will publish a value on an interval and Subscribe to begin publishing values
  // secondsCounter = interval(1000).subscribe(n => {console.log(`It's been ${n + 1} seconds since subscribing!`)});

  // nums = of(1, 2, 3);

  // squareValues = map((val: number) => val * val);
  // squaredNums = this.squareValues(this.nums).subscribe(x => console.log(x));

  //   num = of(1, 2, 3, 4, 5);

// Create a function that accepts an Observable.
  squareOddVals = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n * n)
);

  ngOnInit(): void {
    this.postService.getPosts().subscribe( resposes => {
    this.posts = resposes ;
    });

  }

  // Async Custom Validatiors
  logIn(){
    // check data from api > login
    // else > set error
    return this.form.setErrors({invalidLogin: true});
  }

// Create an Observable that will run the filter and map functions and Subscribe to run the combined functions
  // squareOdd = this.squareOddVals(this.num).subscribe(x => console.log(x));

// HTTP Services and HTTP Methods => {get - post(create) - patch/put(update) - delete}
// Get Read Objects from HTTP

  createPost(input: HTMLInputElement){

  const post = {title : input.value, id : ''};
  this.postService.createPost(post).subscribe( respose => {
    this.posts.splice(0, 0, post);
  });
}
// `${this.url}tickets/get?id=` + id
// HTTP Update Object
updatePost(post: any, inputTitle: any){

  const updatePost = {title : inputTitle, id : post.id};
  this.postService.updatePost(updatePost).subscribe(response => {

    const index = this.posts.indexOf(post);
    this.posts[index] = updatePost;
  });
}

deletePost(post: any){

  const index = this.posts.indexOf(post);
  this.postService.deletePost(post).subscribe(respose => {
    this.posts.splice(index, 1);
  });

}



}
