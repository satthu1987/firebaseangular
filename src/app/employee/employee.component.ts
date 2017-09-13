import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from "../Employee.service";

@Component({
  selector: 'item',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() EmployeeNo: number;
  item;

  constructor(private _itemService: EmployeeService) {}

  ngOnInit() {
     this._itemService.fetchItem(this.EmployeeNo).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load item' + this.EmployeeNo));  
  }
}