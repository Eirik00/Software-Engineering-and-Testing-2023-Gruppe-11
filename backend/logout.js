const login = JSON.parse(localStorage.getItem("login"));

function loggOut(){
    localStorage.removeItem("login");
    location.reload();
}
        
const d = document.getElementById("loginornot");
if(login === null){
    let e = document.createElement("a");
    e.href = "login/index.html";
    e.innerHTML = "Login <i class='fa fa-user icon'></i>"
    d.appendChild(e);
    d.appendChild(document.createElement("login"));
}else{
    let e = document.createElement("p");
    e.innerHTML = "Velkommen "+login.username+" <i class='fa fa-user icon'></i>";
    d.appendChild(e);
    e = document.createElement("a");
    e.href = "javascript:loggOut();";
    e.innerHTML = "logg ut";
    d.appendChild(e);
}
