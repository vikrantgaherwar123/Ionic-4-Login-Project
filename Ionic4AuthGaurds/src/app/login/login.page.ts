import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username
  email
  pass
  newPass
  
  constructor(
    private authService: AuthenticationService
     ) { }
 
  ngOnInit() {
  }
 
  loginUser(){
    var obj:any = {}
    obj.Username = this.username
    obj.Email = this.email
    obj.pass = this.pass
    obj.newPass = this.newPass
    this.authService.login(obj)
  }
 
}