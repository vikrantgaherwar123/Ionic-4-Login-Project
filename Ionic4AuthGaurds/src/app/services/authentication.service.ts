import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
 
 
@Injectable()
export class AuthenticationService {
 
  authState = new BehaviorSubject(false);
 
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
 
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
 
 
  login(data) {
    var dummy_response = {
      Username: data.Username,
      Password: data.pass
    };
    this.storage.set('USER_INFO', dummy_response).then((response) => {
      if(response.Username == 'vikrant' && response.Password =='abc'){
        this.router.navigate(['dashboard']);
        this.authState.next(true);
      }else{
        alert('username or password is invalid')
      }
    });
  }
 
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }
 
 
 
}