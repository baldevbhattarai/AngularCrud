import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Department } from 'src/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/models/employee.model';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styles: []
})
export class CreateEmployeeComponent implements OnInit {
 isActive= false;
 datePickerConfig: Partial<BsDatepickerConfig>;
 previewPhoto = false; 

  employee: Employee = {
      id: null,
      name: null,
      gender: null,
      contactPreference: null,
      phoneNumber: null,
      email: null,
      dateOfBirth: null,
      department: 'select',
      isActive: null,
      photoPath: null
    }; 
 departments: Department[] = [
  { id: 1, name: 'Help Desk' },
  { id: 2, name: 'HR' },
  { id: 3, name: 'IT' },
  { id: 4, name: 'Payroll' }
];
  constructor() { 
    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue', 
      showWeekNumbers: true,
      dateInputFormat: 'DD/MM/YYYY'
    });
  }
  ngOnInit() {
   
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  } 
  
}
