import { LoginService } from './../../services/login-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

  user = {};
  error;

  constructor(private loginService: LoginService, private router: Router) { }

  doLogin() {
    this.loginService
      .doLoginForCustomer(this.user)
      .subscribe(
      () => this.router.navigate(['/customer/home']),
      error => this.error = error
      );
  }

}
