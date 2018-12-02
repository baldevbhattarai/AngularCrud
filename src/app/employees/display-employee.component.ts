import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Output()
  notify: EventEmitter<Employee>= new EventEmitter<Employee>();
  @Input() employee: Employee;
  @Input() searchTerm: string;
  private selectedEmployeeId:number;
  constructor(private _route: ActivatedRoute,private _router: Router) { 

  }

  ngOnInit() {
    this.selectedEmployeeId =+this._route.snapshot.paramMap.get('id');
    
  }
  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }
}