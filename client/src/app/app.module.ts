import { LoginChoiceComponent } from './shared/login-choice/login-choice.component';
import { routing } from './../app.routing';
import { EmployerLoginPageComponent } from './employer/login.page/login.page.component';
import { CustomerLoginPageComponent } from './customer/login.page/login.page.component';
import { LoginComponent } from './shared/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginService } from './services/login-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerLoginPageComponent,
    EmployerLoginPageComponent,
    LoginChoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
