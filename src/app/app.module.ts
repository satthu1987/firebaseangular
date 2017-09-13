import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

import { DomainPipe } from './domain.pipe';

import { EmployeeService } from './Employee.service'

//Routing
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    FooterComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }