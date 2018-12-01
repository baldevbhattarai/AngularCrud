import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Output()
  notify: EventEmitter<Employee>= new EventEmitter<Employee>();
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }
  haldleClick():void{
    this.notify.emit(this.employee);
  }
}