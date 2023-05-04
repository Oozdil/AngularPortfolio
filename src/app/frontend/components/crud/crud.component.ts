import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee-model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {

  }
  formValue!: FormGroup;

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
  employeeList: EmployeeModel[] = [];
  emp!: EmployeeModel;
  editModel: EmployeeModel = new EmployeeModel();

  setEmployeeList() {
    this.emp = new EmployeeModel();
    this.emp.id = 1;
    this.emp.firstName = "Orçun";
    this.emp.lastName = "Özdil";
    this.emp.email = "contact@orcunozdil.site";
    this.emp.city = "Izmir";
    this.emp.country = "Turkey";
    this.emp.position = "Software Developer";
    this.emp.salary = 1000;
    this.employeeList.push(this.emp);

    this.emp = new EmployeeModel();
    this.emp.id = 2;
    this.emp.firstName = "John";
    this.emp.lastName = "Doe";
    this.emp.email = "john_doe@test.com";
    this.emp.city = "N.Y.";
    this.emp.country = "USA";
    this.emp.position = "Software Developer";
    this.emp.salary = 5000;
    this.employeeList.push(this.emp);
  }

  delete(emp:any) {
    if(confirm("Are you sure to delete '"+ emp.firstName+" "+emp.lastName+"'")) {
      this.employeeList = this.employeeList.filter(e => e.id!=emp.id);
    }
  }
  edit(row: any) {
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['city'].setValue(row.city);
    this.formValue.controls['country'].setValue(row.country);
    this.formValue.controls['position'].setValue(row.position);
    this.formValue.controls['salary'].setValue(row.salary);
    this.editModel.firstName = this.formValue.value.firstName;
    this.editModel.lastName = this.formValue.value.lastName;
    this.editModel.email = this.formValue.value.email;
    this.editModel.city = this.formValue.value.city;
    this.editModel.country = this.formValue.value.country;
    this.editModel.position = this.formValue.value.position;
    this.editModel.salary = this.formValue.value.salary;
    this.editModel.id = row.id;

  }
  resetEditModel() {
    this.formValue.reset();
    this.editModel.id = 0;
  }
  addEmployee() {
    this.editModel = new EmployeeModel();
    var count = this.employeeList.length;

    this.editModel.firstName = this.formValue.value.firstName;
    this.editModel.lastName = this.formValue.value.lastName;
    this.editModel.email = this.formValue.value.email;
    this.editModel.city = this.formValue.value.city;
    this.editModel.country = this.formValue.value.country;
    this.editModel.position = this.formValue.value.position;
    this.editModel.salary = this.formValue.value.salary;
    this.editModel.id = count + 1;

    this.employeeList.push(this.editModel);
    let ref = document.getElementById("cancel");
    ref?.click();
  }
  updateEmployee() {
    var emp = this.employeeList.find(e => e.id == this.editModel.id);
    emp.firstName = this.formValue.value.firstName;
    emp.lastName = this.formValue.value.lastName;
    emp.email = this.formValue.value.email;
    emp.city = this.formValue.value.city;
    emp.country = this.formValue.value.country;
    emp.position = this.formValue.value.position;
    emp.salary = this.formValue.value.salary;
    let ref = document.getElementById("cancel");
    ref?.click();
  }

}
