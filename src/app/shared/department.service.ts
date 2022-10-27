import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  formDeptData : Department = new Department();

  departments: Department[];

  constructor(private httpClient: HttpClient) { }

  getAllDepartments():Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/department');
  }

  bindGetAllDepartment(){

    this.httpClient.get(environment.apiUrl+'/api/department')
    .toPromise()
    .then (
      response=>{
        this.departments = response as Department[];
      }
    )
  }
}
