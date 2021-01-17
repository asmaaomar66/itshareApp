import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { TextValidator } from './validator.validation';
import { UniqnessValidator } from './validator/uniqness.validator';
//import * as Promise from 'bluebird';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itshareApp';
  // favStat = true;
  // favChange(){
  //     console.log(this.favStat);
  // }


  //ngFor
  // persons : string [] = ['asmaa', 'esraa', 'asmahan', 'mohamed'];

  //ngFor Group By for Nested Array of Objects
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

  //ngFor add and remove items and trackBy
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


  //ngSwitchCase
  // defaultView='Courses';

  // setView (selectedView:any){
  //   this.defaultView = selectedView;
  // }

  //ngStyle
  // whatColor = true;

  //template driven validation and ngForm and ngSubmit
  // logObj(email:any){
  //   console.log(email);
  // }
  // Submit(f:any){

  //   console.log(f);
  // }

  //Reactive form validation and ng2 validation
  form = new FormGroup({
    email : new FormControl('', [Validators.required],UniqnessValidator.shouldbeuniqness),
    password : new FormControl('', [TextValidator.noSpaceAllowed]),
    age : new FormControl('', CustomValidators.rangeLength([4, 20]))
  })

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get age(){
    return this.form.get('age');
  }

  //Async Custom Validatiors
  logIn(){
    //check data from api > login
    //else > set error
    return this.form.setErrors({invalidLogin: true});
  }

}
