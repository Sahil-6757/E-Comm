let Subtotal = document.getElementById("Subtotal");
let Shipping = document.getElementById("Shipping");
let Total = document.getElementById("Total");
let FinalCheckout = document.getElementById("FinalCheckout");
let arr = [];
let Itemname = JSON.parse(localStorage.getItem("Products"));

function Getitems() {
  let PurchaseProducts = document.getElementById("PurchaseProducts");
  let html = "";
  Itemname.forEach((element, index) => {
    PurchaseProducts.innerHTML += `<div class="card-body">
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-row align-items-center">
        <div>
          <img
            src="${element.pimage}"
            class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
        </div>
        <div class="ms-3">
          <h5>${element.pname}</h5>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center">
        <div style="width: 50px;">
        </div>
        <div style="width: 80px;">
          <h5 class="mb-0">${element.pprice}$</h5>
        </div>
        <img class="trash" src="./images/trash.png" onClick="trash(${index})">
      </div>
    </div>
    </div>`;
  });
}

function trash(index) {
  console.log(Itemname);
  Itemname.splice(index, 1);
  console.log(Itemname);
  localStorage.setItem("Products", JSON.stringify(Itemname));
  location.reload();
}

function sum_of_products() {
  let sum =0;
  Itemname.forEach((element) => {
    arr.push(element.pprice);
  });
  for (let i = 0; i < arr.length; i++) {
    // sum.replace("$", "");
    sum=arr[i];
  }
  console.log(sum);
}

Getitems();
sum_of_products();
