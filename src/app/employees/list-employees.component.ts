import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee.model';
import { EmployeeService } from './employee.service';



@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  dataFromChild:Employee;
  constructor(private _employeeSerVice: EmployeeService) { 

  }

  ngOnInit() {
    this.employees = this._employeeSerVice.getEmployees();
  }

  handleNotify(eventData:Employee):void{
    this.dataFromChild = eventData;
  }
}
