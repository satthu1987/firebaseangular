import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'EmployeeNo/1', pathMatch : 'full'},
  {path: 'create', component: CreateEmployeeComponent},
  {path: 'show', component: EmployeesComponent, data: {storiesType: 'show'}}
];

export const routing = RouterModule.forRoot(routes);