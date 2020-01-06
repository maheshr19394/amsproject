import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthGuard]

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted= false;
  password: string;
  username: string;
  submitted: boolean;
  constructor( private myRoute: Router,private formBuilder: FormBuilder,private localSt:LocalStorageService) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  login(){
    this.submitted = true;
  if (this.loginForm.invalid) {
    return;
  }
  this.username = this.loginForm.controls['username'].value;
  this.password = this.loginForm.controls['password'].value;
  if(this.username === 'test' && this.password === 'test'){
    alert('Login suceessfully');
    this.myRoute.navigate(['/dashboard']);
    this.localSt.store('loginDetaisl', this.loginForm.value);
  }else {
    alert('Invalid credentials');
    this.loginForm.reset();
    this.submitted = false;
  }
  //console.log("login details locatl"+this.localSt.retrieve('loginDetaisl'));
  }
}
