import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  page:number = 1;
  filter:string = '';
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.bindGetAllEmployeeList();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe(
      response => {
        console.log(response);
      },
      error =>{
        console.log('something went wrong');
        console.log(error);
      }      
    )
  }

  updateEmployee(emp:Employee){

    this.populateEmployee(emp)

  }

  populateEmployee(emp:Employee){

    this.employeeService.formEmployeeData = Object.assign({},emp);

  }

  deleteEmployee(emp:Employee){

    this.employeeService.deleteEmployee(emp).subscribe(
      response=>{
        console.log(response)
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    );
  }
  disableEmployee(emp:Employee){

    this.employeeService.disableEmployee(emp).subscribe(
      response=>{
        console.log(response)
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    );
  }



}
