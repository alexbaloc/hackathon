import { SmartContractService } from './services/smartcontracts.service';
import { ApplicationService } from './services/application.service';
import { TimeService } from './services/time.service';
import { PensionService } from './services/pension.service';
import { AccrualComponent } from './accrual/accrual-component';
import { CustomerComponent } from './customer/customer-component';
import { EmployerComponent } from './employer/employer-component';
import { StatusbarComponent } from './statusbar/statusbar-component';
import { routing } from './../app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusbarComponent,
    EmployerComponent,
    AccrualComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [PensionService, SmartContractService, TimeService, ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
