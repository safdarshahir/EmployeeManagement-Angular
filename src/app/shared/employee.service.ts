import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formEmployeeData: Employee = new Employee();

  employees: Employee[];

  constructor(private httpClient: HttpClient) { }

  getAllEmployee():Observable<any>{

    return this.httpClient.get(environment.apiUrl+'/api/employees');
  }

  addEmployee(emp:Employee):Observable<any>{

    return this.httpClient.post(environment.apiUrl+'/api/employees/add',emp);
  

  }

  updateEmployee(emp:Employee):Observable<any>{

    return this.httpClient.post(environment.apiUrl+'/api/employees/edit',emp);

  }

  deleteEmployee(emp:Employee):Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/employees/delete',emp);
  }
  
  disableEmployee(emp:Employee):Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/employees/disable',emp);
  }

  bindGetAllEmployeeList(){

    this.httpClient.get(environment.apiUrl+'/api/employees')
    .toPromise()
    .then(
      response =>{
        this.employees = response as Employee[];
      }
    )
  }
}
