let h1 = document.getElementById("h1");
let img1 = document.getElementById("img1");
let EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailinput = document.getElementById("Email");
let detailsinput = document.getElementById("detailsinput");
let submitbtn = document.getElementById("submitbtn");
let EmailError = document.getElementById("EmailError");
let container = document.getElementById("container");
let NavbarIcon = document.getElementById("NavbarIcon");
const Products = JSON.parse(localStorage.getItem("Products") || "[]");

// Adding Event On Submmit Button Which check the field whether filled or not.
submitbtn.addEventListener("click", () => {
  let emptyformerror = document.getElementById("emptyformerror");
  if (emailinput.value == "") {
    emptyformerror.innerHTML = `<div class="alert alert-danger emptyForm" role="alert">
        Fill the form
      </div>`;
    emailinput.focus();
  } else if (detailsinput.value == "") {
    emailinput.focus();
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

// Adding NavbarIcon Event to redirect to cart.html page.
NavbarIcon.addEventListener("click", () => {
  location.href = "cart.html";
});

// Adding Home Event to reload the current Page.
let Home = document.getElementById("Home");
Home.addEventListener("click", () => {
  location.reload();
});

// Initializing CardSelect Funtions
function CardSelect(name, img, price) {
  productsInfo = {
    pname: name,
    pimage: img,
    pprice: price,
  };
  Products.push(productsInfo);
  localStorage.setItem("Products", JSON.stringify(Products));
  location.href = "cart.html#";
}

// Initializing checkEmail Functions
function checkEmail() {
  let Email = document.getElementById("Email");
  let EmailError = document.getElementById("EmailError");
  if (EmailRegex.test(Email.value)) {
    EmailError.innerHTML = `<div class="alert alert-primary" role="alert">
        Valid Email
      </div>`;
    setTimeout(() => {
      EmailError.innerHTML = "";
    }, 2000);
    console.log("Valid Email");
  } else {
    EmailError.innerHTML = `<div class="alert alert-danger" role="alert">
        Invalid Email
      </div>`;
    Email.focus();
  }
}

// Initializing getdata Function
function getdata() {
  let html = "";
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) =>
      json.forEach((element, index) => {
        container.innerHTML += `
        <div class="container row">
        <div class="card col-sm-12"style="width: 18rem;"
         onClick="CardSelect(('${element.title}'),('${element.image}'),('${element.price}'));">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                 <p class="card-text">${element.description}</p>
                 <a href="#" class="btn btn-primary pricebtn">${element.price}$</a>
                </div>
                </div>
                </div>`;
      })
    );
}

// Calling functions
getdata();
