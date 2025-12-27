// acts as a blueprint for an object
 class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    // no need to write function()
    displayProduct(){
        console.log(`Product:${this.name}`);
        console.log(`Price:$${this.price.toFixed(2)}`);
    }
 }

 const product1= new Product("Shirt",19.99);
 product1.displayProduct();
 const product2= new Product("Pant",22.50);
 product2.displayProduct();
  const product3= new Product("Underwear",100);
 product3.displayProduct();