let head = document.getElementById('heading');
let login_btn = document.getElementById('login_btn');
let username = document.getElementById('username');
let password = document.getElementById('password');

head.addEventListener('click',()=>{
    alert("You clicked on login page heading")
});

login_btn.addEventListener('click',()=>{
    if(username.value == "admin" && password.value == "admin"){
        alert("Login Success");
        location.href="index.html";
    }
    else{
        alert("Login Failed")
    }
})