import { ProductModel } from "./product.model";

export class ProductList {
    list: ProductModel[] = [];
    product: ProductModel;
    constructor() {
        this.addTestProducts();
    }
    addTestProducts() {
        this.product = new ProductModel();
        this.product.id=1;
        this.product.productName="Product 1";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"electronic ";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_1.jpg";
        this.product.price=100;
        this.list.push(this.product);

        this.product = new ProductModel();
        this.product.id=2;
        this.product.productName="Product 2";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"electronic ";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_2.jpg";
        this.product.price=100;
        this.list.push(this.product);

        this.product = new ProductModel();
        this.product.id=3;
        this.product.productName="Product 3";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"clothing";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_3.jpg";
        this.product.price=100;
        this.list.push(this.product);

        this.product = new ProductModel();
        this.product.id=4;
        this.product.productName="Product 4";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"clothing ";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_4.jpg";
        this.product.price=100;
        this.list.push(this.product);

        this.product = new ProductModel();
        this.product.id=5;
        this.product.productName="Product 5";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"electronic";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_5.jpg";
        this.product.price=100;
        this.list.push(this.product);

        this.product = new ProductModel();
        this.product.id=6;
        this.product.productName="Product 6";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"furniture";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_6.jpg";
        this.product.price=100;
        this.list.push(this.product);

        this.product = new ProductModel();
        this.product.id=7;
        this.product.productName="Product 7";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"electronic";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_7.jpg";
        this.product.price=100;
        this.list.push(this.product);

        this.product = new ProductModel();
        this.product.id=8;
        this.product.productName="Product 8";
        this.product.categoryName="col-lg-4 col-md-6 productItem "+"clothing";
        this.product.description="";
        this.product.imageUrl="/assets/images/product_img_8.jpg";
        this.product.price=100;
        this.list.push(this.product);
    }
}