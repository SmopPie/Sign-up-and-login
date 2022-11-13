function signup(a){
    event.preventDefault();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var user ={
        email : email,
        password : password,
    };
    var json = JSON.stringify(user)
    localStorage.setItem(email,json)
}

function login(a){
    event.preventDefault();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if (user ==null){
        alert("vui long nhap username va password")
    }
    else if (email ==data.email && password ==data.password){
        window.location.href=""
    }
    else{
        alert("Đăng nhập thất bại")
    }
}