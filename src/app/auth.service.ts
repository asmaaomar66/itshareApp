import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { switchMap, flatMap, map } from 'rxjs/operators';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  user$: Observable<User | null | undefined>;
  profileData: AngularFirestoreCollection<{}>;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public router: Router) {

      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          // Logged in
          if (user) {
            return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();

          } else {
            // Logged out
            return of(null);
          }
        })
      )
    }

    async googleSignin() {
      const provider = new firebase.auth.GoogleAuthProvider();

      const credential = await this.afAuth.signInWithPopup(provider);
      console.log(credential);

      return this.updateUserData(credential.user) , this.getUserData(credential.user?.uid);
    }

    getCurrentUser() {

      return this.afAuth.authState
    }
    UserId() {
      this.getCurrentUser().subscribe(user => {
        //console.log('id is ', user?.uid)

        return user?.uid;
    })
    }
    // currentuser(user){
    //   console.log(user);

    //   if(!user.userId){
    //     user.userId = user.uid
    //   }
    //   return user.uid;
    // }

    getUserData(id?){

      // var user: User;
      // let _id = this.UserId();
      // let userRef = this.firestore.collection('users').ref.where('uid', '==', id || _id).get().then(result => console.log(result.data()));



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
