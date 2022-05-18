
let arr=JSON.parse(localStorage.getItem("Products"))||[];

function Product(n,c,i,p,g,s){
    this.name=n;
    this.category=c;
    this.image=i;
    this.price=p;
    this.gender=g;
    this.sold=s;
}

function storeProducts(e){
      e.preventDefault();
      
    let form=document.getElementById("products")
 
    let name=form.name.value;
  
    let category=form.category.value;
  
    let image=form.image.value;
  
    let price=form.price.value;
  
    let gender=form.gender.value;
   
    let sold=form.sold.value;
  

    let prod=new Product(name,category,image,price,gender,sold)
 
  arr.push(prod);
  //console.log(arr);
  localStorage.setItem("Products",JSON.stringify(arr));
}