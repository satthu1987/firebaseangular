import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from "../Employee.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  items;

  constructor(private _itemServices:EmployeeService,private route: ActivatedRoute) {}

  ngOnInit() {

    this._itemServices.fetchStories().subscribe(items=>this.items = items,
                                                error=>console.log('Error fetching data'));
}

}
