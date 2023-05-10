import { Component } from '@angular/core';
import { ProductList } from '../../models/productList';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  data: ProductList;
  selectedProduct: ProductModel=new ProductModel();
  ngOnInit() {
    this.data = new ProductList();
  }
  onButtonGroupClick($event) {
    let clickedElement = $event.target || $event.srcElement;
    if (clickedElement.nodeName === "BUTTON" && !clickedElement.classList.contains("dropdown-toggle")) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
      this.filterProducts(clickedElement.value);
    }
  }

  filterProducts(className: string) {
    let productItems = document.querySelectorAll(".productItem");
    productItems.forEach(p => {
      p.classList.add("hidden");


      if (p.classList.contains(className) || className == "*")
        p.classList.remove("hidden");
    });
  }


  sort(selection: number) {
    alert(selection);
  }

  productSelected(product: any) {
    this.selectedProduct=this.data.list.find(p=>p.id==product.id);
  }

}
