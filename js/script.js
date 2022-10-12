let h1 = document.getElementById("h1");
let img1 = document.getElementById("img1");
let EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailinput = document.getElementById("Email");
let detailsinput = document.getElementById("detailsinput");
let submitbtn = document.getElementById("submitbtn");
let EmailError = document.getElementById("EmailError");
let container = document.getElementById("container");
let NavbarIcon = document.getElementById("NavbarIcon");

const Products = JSON.parse(localStorage.getItem("Products") || []);

function checkEmail() {
  let Email = document.getElementById("Email").value;
  let EmailError = document.getElementById("EmailError");
  if (EmailRegex.test(Email)) {
    EmailError.innerHTML = `<div class="alert alert-primary" role="alert">
        Valid Email
      </div>`;
    setTimeout(() => {
      EmailError.innerHTML = "";
    }, 2000);
    console.log("Valid Email");
  } else {
    console.log("Invalid Email");
    EmailError.innerHTML = `<div class="alert alert-danger" role="alert">
        Invalid Email
      </div>`;
  }
}

submitbtn.addEventListener("click", () => {
  let emptyformerror = document.getElementById("emptyformerror");
  if (emailinput.value == "") {
    emailinput.focus();
    emptyformerror.innerHTML = `<div class="alert alert-danger emptyForm" role="alert">
        Fill the form
      </div>`;
  } else if (detailsinput.value == "") {
    detailsinput.focus();
  } else {
    emptyformerror.innerHTML = `<div class="alert alert-primary emptyForm" role="alert">
        Submitted Successfully
      </div>`;
    setTimeout(() => {
      emptyformerror.innerHTML = "";
      emailinput.value = "";
      detailsinput.value = "";
    }, 5000);
  }
});

function getdata() {
  let html = "";
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) =>
      json.forEach((element, index) => {
        container.innerHTML += `<div class="card container-fluid "style="width: 18rem;"
         onClick="CardSelect(('${element.title}'),('${element.image}'),('${element.price}'));">
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

NavbarIcon.addEventListener("click", () => {
  location.reload();
});

function CardSelect(img, name, price) {
  name.replace("'"," ");
  let ProductInfo = {
    Itemname: img,
    Itemimg: name,
    Itemprice: price,
  };

  localStorage.setItem("Products", JSON.stringify(ProductInfo));
  location.href = "http://127.0.0.1:5500/cart.html";
}

getdata();
