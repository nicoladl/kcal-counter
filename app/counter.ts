interface IProduct {
  name: string;
  brand: string;
  kcal: number;
}

class Product implements IProduct{
  constructor(public name: string, 
              public brand: string,
              public kcal: number){}
}

class ProductList{
  public static allProducts: Product[] = new Array;
  constructor(public totalKcal: number = 0) {}
  createProductItem(name: string, 
                    brand: string,
                    kcal: number): number {
      let newItem = new Product(name, brand, kcal);
      let totalCount: number = ProductList.allProducts.push(newItem);
      return totalCount;
  }

  allProductItems():Product[]{
      return ProductList.allProducts;
  }

  sumKcal():number{
    let selectedProduct = ProductList.allProducts.map(item => this.totalKcal += item.kcal)
    return this.totalKcal
  }
}

window.onload = function(){
  let name = <HTMLInputElement>document.getElementById("productName");
  let brand = <HTMLInputElement>document.getElementById("productDescription");
  let kcal = <HTMLInputElement>document.getElementById("productKcal");
  document.getElementById("add").addEventListener('click', () => toAllproduct(name.value, brand.value, +kcal.value)); 
}

//Function called when add is clicked
function toAllproduct(task:string, brand:string, kcal:number){

  let todo = new ProductList();
  // adds the task to list
  let numberOfItems = todo.createProductItem(task, brand, kcal);
  

  let title = document.querySelector('.productTitle span');
  let productKcal = document.querySelector('.productKcal span');
  title.innerHTML = ': ' + numberOfItems.toString()
  productKcal.innerHTML = ': ' + todo.sumKcal().toString()

  //Fetched the updated list and create a list item for UI
  let div = <HTMLDivElement>document.getElementById("productList");
  let list="<ul>";

  ProductList.allProducts.forEach((item, index) => {
    list = list + " <li> " + ProductList.allProducts[index].name + ' ' + ProductList.allProducts[index].brand + ' ' + ProductList.allProducts[index].kcal;
  })

  list += "</li>"
  div.innerHTML = list;

  //Casting
  (<HTMLInputElement>document.getElementById("productName")).value = "";
  (<HTMLInputElement>document.getElementById("productDescription")).value = "";
  (<HTMLInputElement>document.getElementById("productKcal")).value = "";
  
}