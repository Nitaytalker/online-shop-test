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