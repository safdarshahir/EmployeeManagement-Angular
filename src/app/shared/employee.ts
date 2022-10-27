import { Department } from "./department"

export class Employee {

    empId: number;
    empName: string;
    designation:string;
    dateOfJoining =  new Date();
    salary: number;
    empPhoneNumber: number;
    isActive = false;
    deptId:number;
    department = new Department();
}
