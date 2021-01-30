import { Injectable, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, of, pipe } from 'rxjs';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { switchMap, flatMap, map } from 'rxjs/operators';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  user:any;
  user$: Observable<User | null | undefined>;
  users: Observable<User | null | undefined>;
  profileData: AngularFirestoreCollection<{}>;
  requesting = false;
  response: any;
  currentUser : any;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public router: Router) {
      this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {

      if (user) {
      return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();

      } else {

      return of(null);
      }
      })
      )

      //this.users = this.firestore.collection('users').valueChanges();
    }

    readData(){
    
      return this.firestore.collection('users').valueChanges();
    }
    async googleSignin() {
      const provider = new firebase.auth.GoogleAuthProvider();

      const credential = await this.afAuth.signInWithPopup(provider);
      console.log(credential);
            //this.router = router('/')
      return this.updateUserData(credential.user),this.userName(credential.user?.displayName),this.getDataOfUser(credential.user?.uid)
      //,this.readData(credential.user)
    }
  //     get isLoggedIn(): boolean {
  //     const user = sessionStorage.getItem('user');
  //     return user !== null;
  // }

    // readData(user) {
    //   return this.firestore.collection('users').snapshotChanges();
    // }

    getCurrentUser() {
      //console.log(this.afAuth.authState)
      return this.afAuth.authState
    }

    async getDataOfUser(uid) {
      /*let _id =  this.UserId()
      //uid = this.user.uid
      this.currentUser = this.firestore.collection('users').ref.where('uid', '==',  _id).get()
        console.log(this.currentUser);*/
    return this.firestore.collection('users').valueChanges()
      .subscribe(queriedItems => {


        this.currentUser = queriedItems[0];
        //if(queriedItems[0] === uid){

          //console.log(this.currentUser);
        //}
        //console.log(queriedItems);
        return queriedItems ;
    });
    ;
    }
    UserId() {
      this.getCurrentUser().subscribe(user => {
        console.log('id is ', user?.uid)
        return user?.uid;
    })


    }
    userName(name){
      this.getCurrentUser().subscribe(user => {
        //console.log('id is ', user.uid)
        console.log('name is ', user?.displayName)

        return user?.displayName;
    })
    }
    currentuser(user){
      //console.log(user);

      if(!user.userId){
        user.userId = user.uid
      }
      return user.uid;
    }

    updateUserData(user) {
      //console.log(user);

      if(!user.userId){
        user.userId = user.uid;
      }

      // Sets user data to firestore on login
    this.firestore.collection('users').ref.where('uid', '==', user.userId).get().then(_user => {

      if (!_user.docs[0]) {
        this.firestore.collection('users').add({
          uid: user.userId,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.imageUrl || '',
          point: 0
        }).then(u=>{
          console.log(u);

        })

      } else {

      }

      this.router.navigate(['']);
      // window.location.reload()

    })
    }


    logout(){
      this.afAuth.signOut();
    }






}
