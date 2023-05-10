import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductModel } from '../ecommerce/models/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  products: ProductModel[] = [];
  editProductModel: ProductModel = new ProductModel();
  formValue!: FormGroup;
  url = "https://localhost:7125/api/";
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.getAllProducts();
    this.formValue = this.formBuilder.group({
      id: [''],
      productName: [''],
      categoryName: [''],
      price: [''],
      description: [''],

    });
  }
  getAllProducts() {
    this.http.get<ProductModel[]>(this.url + "Products").subscribe(response => {
      this.products = (response);
    },
      errorr => {
        console
          .log(JSON.stringify(errorr));
      });
  }
  deleteProduct(row: any) {
    this.http.delete(this.url + "Products/" + row.id).subscribe(() => {
      this.getAllProducts();
    });
  }
  editProduct(row: any) {
    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['productName'].setValue(row.productName);
    this.formValue.controls['categoryName'].setValue(row.categoryName);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['description'].setValue(row.description);
    this.editProductModel = new ProductModel();
    this.editProductModel.id = row.id;
    this.editProductModel.productName = row.productName;
  };
  resetEditModel() {
    this.formValue.reset();
    this.editProductModel = new ProductModel();
  }

}
