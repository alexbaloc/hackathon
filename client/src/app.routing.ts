import { LoginChoiceComponent } from './app/shared/login-choice/login-choice.component';
import { CustomerLoginPageComponent } from './app/customer/login.page/login.page.component';
import { EmployerLoginPageComponent } from './app/employer/login.page/login.page.component';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: 'choice', component: LoginChoiceComponent },
  { path: 'customer/login', component: CustomerLoginPageComponent },
  { path: 'company/login', component: EmployerLoginPageComponent },
  { path: '**', component: LoginChoiceComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
