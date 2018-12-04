import { Injectable } from '@angular/core';
import { Employee } from 'src/models/employee.model';

import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/mark.png'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateOfBirth: new Date('3/25/1976'),
            department: '1',
            isActive: false,
            photoPath: 'assets/images/john.png'
        },
    ];
    constructor(private httpClient: HttpClient){

    }

    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>('http://localhost:3000/employees1')
        .pipe(catchError(this.handleError));
    }
    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        // return an observable with a meaningful error message to the end user
        return throwError('There is a problem with the service.We are notified & working on it. Please try again later.');
    }
    deleteEmployee(id: number) {
        const i = this.listEmployees.findIndex(e => e.id === id);
        if (i !== -1) {
          this.listEmployees.splice(i, 1);
        }
      }
    save(employee: Employee) {
        if (employee.id === null) {
          // reduce() method reduces the array to a single value. This method executes
          // the provided function for each element of the array (from left-to-right)
          // When we implement the server side service to save data to the database
          // table, we do not have to compute the id, as the server will assing it
          const maxId = this.listEmployees.reduce(function (e1, e2) {
            return (e1.id > e2.id) ? e1 : e2;
          }).id;
          employee.id = maxId + 1;
      
          this.listEmployees.push(employee);
        } else {
          const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
          this.listEmployees[foundIndex] = employee;
        }
      }
    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    } 
}