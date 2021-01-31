const allToBuy = document.getElementById('itemtobuy');

function inStart(){
    let toBuys = window.localStorage.getItem("tobuylist");
    if(toBuys==null){
        toBuys =[];
       
    }else{
        toBuys= JSON.parse(localStorage.getItem("tobuylist")) 
    }
    document.getElementById('buttonCart').innerHTML = `<button id='buttonCart' onclick="shoppingCart()" type="button" class="btn btn-secondary">Shopping Cart (${toBuys.length})</button>`
    allToBuy.innerHTML='';
    
    for(let toBuy of toBuys){
        allToBuy.innerHTML +=`<div class="col-1"></div>
        <div id="tobuy${toBuy.id}" class="card" style="width: 18rem;">
            <img src="${toBuy.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${toBuy.name}</h5>
              <p class="card-text">price :${toBuy.price}$.</p>
              <div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">number to buy</span>
  </div>
  <input type="number" value='1' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
            </div>
          </div>
          <div class="col-1"></div>`;
    }
}
inStart();

function goBuy(){
    window.location.href = 'shop.html';
}

function payAll(){
    let toBuys = window.localStorage.getItem("tobuylist");
    let sum = 0;
    if(toBuys==null){
        toBuys =[];
       
    }else{
        toBuys= JSON.parse(localStorage.getItem("tobuylist")) 
    }
    let listBuy =[];
    for(let item of toBuys){
         numberToBuy= document.querySelectorAll(`#tobuy${item.id} input`);
         listBuy.push(numberToBuy[0].value);
    }
    
    allToBuy.innerHTML='';
    let i=0;
    console.log(listBuy);
    for(let item of toBuys){
        
        // console.log(numberToBuy[0].value);
        sum += listBuy[i] * item.price;
        let price = listBuy[i] * item.price;
        allToBuy.innerHTML+=`
        <div class="col-1"></div>
        <div id="tobuy${item.id}" class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">total price : ${item.price} * ${listBuy[i]} = ${price}.</p>
              <div class="input-group input-group-sm mb-3">
  
          </div>
          <div class="col-1"></div>`;
          i++;
    }
    allToBuy.innerHTML+= `<h1>total pay is : ${sum}</h1>`
    document.getElementById("paybutton").innerHTML = `<button  type="button" class="btn btn-outline-dark">Set Crad</button>`
    console.log(sum);
     
     
}

