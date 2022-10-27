import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { error } from '@angular/compiler/src/util';
import { Employee } from 'src/app/shared/employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService,public deptService: DepartmentService,private toastr: ToastrService) {
    this.toastr.toastrConfig.timeOut = 10000;

   }

  ngOnInit(): void {

    this.deptService.bindGetAllDepartment();
  }

  

  getAllDepartments(){
    this.deptService.getAllDepartments().subscribe(
      response=>{
        console.log(response)
      },
      error =>{
        console.log('something went wrong');
        console.log(error);
      }
      
    )
  }

  onSubmit(form:NgForm){
    //Insert=0 and Update>=1

    let insertId = this.employeeService.formEmployeeData.empId;
    if(insertId == 0 || insertId == null){
      //insert
      this.insertEmployee(form);
    }else{

      this.updateEmployee(form);

    }

  }

  insertEmployee(form?: NgForm){

    console.log(form.value);
    this.employeeService.addEmployee(form.value).subscribe(
      (result)=>{
        console.log(result);
        window.location.reload();
        this.toastr.success('Employee Inserted!');
      }
      )
    }
    
    updateEmployee(form?: NgForm){
      
      console.log(form.value);
      this.employeeService.addEmployee(form.value).subscribe(
        (result)=>{
          console.log(result);
          window.location.reload();
          this.toastr.success('Employee Updated!');
      }
    )
  }

}
