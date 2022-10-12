let Subtotal = document.getElementById("Subtotal");
let Shipping = document.getElementById("Shipping");
let Total = document.getElementById("Total");
let FinalCheckout = document.getElementById("FinalCheckout");

function Getitems() {
  let PurchaseProducts = document.getElementById("PurchaseProducts");
  let Itemname = JSON.parse(localStorage.getItem("Products"));

  console.log(Itemname);

  PurchaseProducts.innerHTML = `<div class="card-body">
  <div class="d-flex justify-content-between">
    <div class="d-flex flex-row align-items-center">
      <div>
        <img
          src="${Itemname.Itemimg}"
          class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
      </div>
      <div class="ms-3">
        <h5>${Itemname.Itemname}</h5>
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <div style="width: 50px;">
      </div>
      <div style="width: 80px;">
        <h5 class="mb-0">${Itemname.Itemprice}$</h5>
      </div>
      <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
    </div>
  </div>
  </div>`;
  function UpdatePrice() {
    let a = `${Itemname.Itemprice}`;
    let b = 20;
    let c = eval(a) + (b);
    console.log(c);
    Subtotal.insertAdjacentHTML("afterend", `$${Itemname.Itemprice}`);
    Total.insertAdjacentHTML("afterend", c);
    FinalCheckout.insertAdjacentHTML("afterend", c);
  }
  UpdatePrice();
}

Getitems();

function getdata() {
  let html = "";
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) =>
      json.forEach((element, index) => {
        console.log(element, index);
        container.innerHTML += `<div class="card container-fluid "style="width: 18rem;" onClick="CardSelect('${element.title}');">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                 <p class="card-text">${element.description}</p>
                 <a href="#" class="btn btn-primary pricebtn">${element.price}$</a>
                </div>
                </div>`;
      })
    );
}
