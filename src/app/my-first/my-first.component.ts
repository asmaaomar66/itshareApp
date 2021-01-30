import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BDServices } from '../db.services';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, switchMap, tap} from 'rxjs/operators';
import { FirebaseAuth } from 'angularfire2';
import { Router } from "@angular/router";
import { User } from '../user.module';
import { AuthService } from '../auth.service';
import { TestService } from '../test.service';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css'],
  providers: [AuthService]
})
export class MyFirstComponent implements OnInit {

  user: any;
  userData: any;
  user$:any;
  msg:any;
  displayName: string;
  profileData: FormGroup;
  formSubmitted = false;
  users : any;
  constructor(public authService: AuthService,private fb: FormBuilder, private testService: TestService){
    //this.user = testService.UserId();
    this.users  = testService.readData();
  }
    
  ngOnInit(): void {
    this.testService.readData()
    .subscribe(users => {
      //console.log(users)
      this.users = users;
    })
  }

  //users : any = this.testService.getDataOfUser(this.user);

  async logOut() {

    await this.authService.logout();

  }


  





  // @Input() isFav: boolean = false;

  // @Output() change = new EventEmitter();

  // onFavClick(){
  //   this.isFav = !this.isFav;
  //   this.change.emit();
  // }
  // // templete variablies
  // onKeyUp(){}
  // //pipes
  // employees =
  // {
  //   fullName : "asmaa omar",
  //   rating : 5.79 ,
  //   salary :5000 ,
  //   hiringDate : new Date(2015,5,1)
  // }

  // //custom pipes
  // name='hjklkmjnhbg';
}
