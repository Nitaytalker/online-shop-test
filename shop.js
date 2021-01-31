

class Shoes{
    constructor(name,price,image,category,id){
        this.name=name;
        this.price=price;
        this.image=image;
        this.category=category;
        this.id=id;
    }
}

const itemToBuy=[];

const myShoes = [    
    new Shoes("nike black", 120, "shose-nike-black.jpg", "Nike", 1),
    new Shoes("nike blue", 150, "nike-blue.jpg", "Nike", 2),
    new Shoes("Adidas black", 150, "adidas-black.jpg", "Adidas", 5)
];

console.log(myShoes);

const gallery =document.getElementById('mygallery');

function firstShow(){
    gallery.innerHTML = ``;
    for(let shose of myShoes){
        gallery.innerHTML += `<div class="col mb-4">
        <div class="card">
          <img src="${shose.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Name:${shose.name}</h5>
            <p class="card-text">price:${shose.price}</p>
            <button onclick='addShoesBuy(${shose.id})' type="button" class="btn btn-outline-dark">Add</button>
          </div>
        </div>
      </div>`;
      
    }
    let toBuys = window.localStorage.getItem("tobuylist");
    if(toBuys==null){
        toBuys =[];
       
    }else{
        toBuys= JSON.parse(localStorage.getItem("tobuylist")) 
    }
    document.getElementById('buttonCart').innerHTML = `<button id='buttonCart' onclick="shoppingCart()" type="button" class="btn btn-secondary">Shopping Cart (${toBuys.length})</button>`
}
firstShow();

function filterShoes(category){
    gallery.innerHTML = ``;
    for(let shose of myShoes){
        if(shose.category == category){
            gallery.innerHTML += `<div class="col mb-4">
            <div class="card">
              <img src="${shose.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Name:${shose.name}</h5>
                <p class="card-text">price:${shose.price}</p>
                <button onclick='addShoesBuy(${shose.id})' type="button" class="btn btn-outline-dark">Add</button>
              </div>
            </div>
          </div>`;
        }
    }
}

function inStart(){
    let toBuys = window.localStorage.getItem("tobuylist");
        if(toBuys==null){
            toBuys =[];
           
        }else{
            toBuys= JSON.parse(localStorage.getItem("tobuylist")) 
        }
        for(let toBuy of toBuys){
            toBuy = new Shoes(toBuy.name,toBuy.price,toBuy.image,toBuy.category.toBuy.id);
            itemToBuy.push(toBuy);
        }
        // console.log(allHeros);
}
// inStart();

function addShoesBuy(id){
    let toBuys = window.localStorage.getItem("tobuylist");
        if(toBuys==null){
            toBuys =[];
           
        }else{
            toBuys= JSON.parse(localStorage.getItem("tobuylist")) 
        }
    
    for(let shose of myShoes){
        if(shose.id == id){
            for(let item of toBuys){
                if(shose.id == item.id){
                    alert("have this item in buylist");
                    return;
                }
            }
            toBuys.push(shose);
            continue;
        }
    }
    document.getElementById('buttonCart').innerHTML = `<button id='buttonCart' onclick="shoppingCart()" type="button" class="btn btn-secondary">Shopping Cart (${toBuys.length})</button>`
    window.localStorage.setItem("tobuylist",JSON.stringify(toBuys) );
    console.log(toBuys);
}
