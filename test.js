const Products = require('./products');

var p1 = new Products.Products("Pollo","Pollo Sofia",20);
var p2 = new Products.Products("Galletas","Galletas Mabel",50);
//var p2 = new Products();
//var p3 = new Products();

//p1 = ["Pollo","Pollo Sofia",20];
//p2 = [];
//p3 = ['Galletas','Galletas Mabel',80];
//var p2 = new Products('Galletas','Galletas Mabel',50);

const manager = new Products.ProductsManagement();

manager.addProducts(p1);
manager.addProducts(p2);
//manager.addProducts(p3);

console.log(manager.showProdutcs()) ;
