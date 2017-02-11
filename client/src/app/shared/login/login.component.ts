import { LoginService } from './../../services/login-service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  @Input()
  role;
  @Input()
  successPath;

  user = {};
  error;

  constructor(private loginService: LoginService, private router: Router) { }

  doLogin() {
    this.loginService
      .login(this.user, this.role)
      .subscribe(
      () => this.router.navigate([this.successPath]),
      error => this.error = error
      );
  }

}
