import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';



@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private _employeeSerVice: EmployeeService, 
              private _router:Router) { 

  }

  ngOnInit() {
    this.employees = this._employeeSerVice.getEmployees();
  }

 onClick(employeeId:number):void{

  this._router.navigate(['/employees', employeeId]);
 }
}
