import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MyFirstComponent } from '../my-first/my-first.component';
import { TestService } from '../test.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(public authService: AuthService,private fireAuth: AngularFireAuth,public router: Router) { }

  ngOnInit(): void {
  }

  async googleSignin() {

    await this.authService.googleSignin();

  }
  }


