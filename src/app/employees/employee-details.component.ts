import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee:Employee;
  constructor(private employeeService:EmployeeService,
              private _route:ActivatedRoute) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
       this.employee = this.employeeService.getEmployee(id);
  }

}
