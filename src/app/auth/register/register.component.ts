import { Component } from '@angular/core';
import { IRegister } from '../../interfaces/Register';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService:AuthService){}

  register: IRegister = {
    Email: '',
    Password: '',
    ConfirmPassword: '',
  };

  submit(): void {
    if (this.register.Password !== this.register.ConfirmPassword) {
      return;
    }
    this.authService.register(this.register)
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
