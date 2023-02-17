import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { ILogin } from '../interfaces/login';
import { IRegister } from '../interfaces/Register';
import { signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoading: boolean = false;
  isAuthenticated: boolean = false;

  login(login: ILogin): void {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, login.Email, login.Password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  register(register: IRegister): void {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, register.Email, register.Password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  signOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.isAuthenticated = false;
        this.router.navigate(['login'])
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
