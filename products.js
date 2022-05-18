
  var arr=JSON.parse(localStorage.getItem("Products"));

  var counter=document.createElement("h2")
  counter.innerText=`Total products are ${arr.length}`;
  document.getElementById("counter").append(counter)

  arr.map(function(el,index){

      var box= document.createElement("div");
      box.setAttribute("class","product");

      var images=document.createElement("img");
      images.src=el.image;

      var name=document.createElement("p");
      name.innerText=el.name;

      var price=document.createElement("p");
      price.innerText=el.price;

      var category=document.createElement("p");
      category.innerText=el.category;

      var box2=document.createElement("div");
      box2.setAttribute("id","box2");

      var Remove=document.createElement("button");
      Remove.setAttribute("id","remove");
      Remove.innerText="Remove";

      Remove.addEventListener("click",function(){
      removed(el,index)
      });

      var Sold=document.createElement("button");
      Sold.setAttribute("id","sold");
      Sold.innerText="Sold";

      box.append(images,name,price,category,Remove,Sold);

      document.querySelector("#container").append(box);

      
      function removed(el,index){
         arr.splice(index,1);
   
         localStorage.setItem("Products",JSON.stringify(arr));
         window.location.reload()
       }
       
      Sold.addEventListener("click",function(){
          var value=soldOrNot(el);
          if(value){
              Sold.style.backgroundColor="red";
              Sold.style.color="white";
          }
          else{
              Sold.style.backgroundColor="green";
              Sold.style.color="white";
          }   
      });

      function soldOrNot(el){

        }
      
      localStorage.setItem("Products",JSON.stringify(arr));
      return el.Sold;
      
  });
