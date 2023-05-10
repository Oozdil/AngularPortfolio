import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare let alertify: any;
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {

  }
  formValue!: FormGroup;
  employeeList: EmployeeModel[] = [];
  testEmp!: EmployeeModel;
  modelToAdd!: EmployeeModel;
  modelToEdit: EmployeeModel = new EmployeeModel();

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      city: [''],
      country: [''],
      position: [''],
      salary: ['']
    });

    this.setEmployeeList();

  }

  setEmployeeList() {
    this.testEmp = new EmployeeModel();
    this.testEmp.id = 1;
    this.testEmp.firstName = "Orçun";
    this.testEmp.lastName = "Özdil";
    this.testEmp.email = "contact@orcunozdil.site";
    this.testEmp.city = "Izmir";
    this.testEmp.country = "Turkey";
    this.testEmp.position = "Software Developer";
    this.testEmp.salary = 1000;
    this.employeeList.push(this.testEmp);

    this.testEmp = new EmployeeModel();
    this.testEmp.id = 2;
    this.testEmp.firstName = "John";
    this.testEmp.lastName = "Doe";
    this.testEmp.email = "john_doe@test.com";
    this.testEmp.city = "N.Y.";
    this.testEmp.country = "USA";
    this.testEmp.position = "Software Developer";
    this.testEmp.salary = 5000;
    this.employeeList.push(this.testEmp);
  }

  test() {
    alert("");
  }

  delete(emp: any) {
    this.employeeList = this.employeeList.filter(e => e.id != emp.id);
    alertify.warning("Employee :  '" + emp.firstName + " " + emp.lastName + "' deleted");
    let ref = document.getElementById("confirmCancel");
    ref?.click();
  }
  edit(row: any) {
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['city'].setValue(row.city);
    this.formValue.controls['country'].setValue(row.country);
    this.formValue.controls['position'].setValue(row.position);
    this.formValue.controls['salary'].setValue(row.salary);
    this.modelToEdit.firstName = this.formValue.value.firstName;
    this.modelToEdit.lastName = this.formValue.value.lastName;
    this.modelToEdit.email = this.formValue.value.email;
    this.modelToEdit.city = this.formValue.value.city;
    this.modelToEdit.country = this.formValue.value.country;
    this.modelToEdit.position = this.formValue.value.position;
    this.modelToEdit.salary = this.formValue.value.salary;
    this.modelToEdit.id = row.id;

  }
  resetEditModel() {
    this.formValue.reset();
    this.modelToEdit.id = 0;
  }
  addEmployee() {
    this.modelToAdd = new EmployeeModel();

    this.modelToAdd.firstName = this.formValue.value.firstName;
    this.modelToAdd.lastName = this.formValue.value.lastName;
    this.modelToAdd.email = this.formValue.value.email;
    this.modelToAdd.city = this.formValue.value.city;
    this.modelToAdd.country = this.formValue.value.country;
    this.modelToAdd.position = this.formValue.value.position;
    this.modelToAdd.salary = this.formValue.value.salary;
    this.modelToAdd.id = this.employeeList[this.employeeList.length - 1].id+1;



    this.employeeList.push(this.modelToAdd);
    alertify.success("New Employee added");
    let ref = document.getElementById("cancel");
    ref?.click();
  }
  updateEmployee() {
    var emp = this.employeeList.find(e => e.id == this.modelToEdit.id);
    emp.firstName = this.formValue.value.firstName;
    emp.lastName = this.formValue.value.lastName;
    emp.email = this.formValue.value.email;
    emp.city = this.formValue.value.city;
    emp.country = this.formValue.value.country;
    emp.position = this.formValue.value.position;
    emp.salary = this.formValue.value.salary;
    alertify.success("Employee updated");

    let ref = document.getElementById("cancel");
    ref?.click();
  }

}
