import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

 
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output()
  notify: EventEmitter<Employee>= new EventEmitter<Employee>();
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  private selectedEmployeeId:number;
  confirmDelete = false;
  constructor(private _route: ActivatedRoute,private _router: Router,
              private _employeeService: EmployeeService) { 

  }

  ngOnInit() {
    this.selectedEmployeeId =+this._route.snapshot.paramMap.get('id');
    
  }
  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }
  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }
  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
}