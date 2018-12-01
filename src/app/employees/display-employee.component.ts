import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Output()
  notify: EventEmitter<Employee>= new EventEmitter<Employee>();
  @Input() employee: Employee;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
  }

}