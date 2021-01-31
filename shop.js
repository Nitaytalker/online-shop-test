

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
    new Shoes("Adidas black", 150, "adidas-black.jpg", "Adidas", 5),
    new Shoes("Adidas red", 110, "adidas-red.jpg", "Adidas", 7)

];

console.log(myShoes);

const gallery =document.getElementById('mygallery');



function filterShoes(category){
    // if (window.location.href == 'shop-cart'){
    //     window.location.href = 'shop.html';
    //     return;
    // }
    if(category=="All"){
        firstShow();
        return;
    }
    gallery.innerHTML = ``;
    for(let shose of myShoes){
        if(shose.category == category){
            gallery.innerHTML += `<div class="col mb-4 ">
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





function shoppingCart(){
    window.location.href = 'shop-cart.html';
}