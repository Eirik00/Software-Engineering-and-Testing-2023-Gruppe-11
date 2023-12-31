function initializeLoginStatus() {
    const login = JSON.parse(localStorage.getItem("login"));
    locals = localStorage;
    const d = document.getElementById("loginornot");
    if (login === null) {
        let e = document.createElement("a");
        e.href = "login/index.html";
        e.innerHTML = "Login <i class='fa fa-user icon'></i>"
        d.appendChild(e);
        d.appendChild(document.createElement("login"));
    } else {
        let e = document.createElement("p");
        e.innerHTML = "Welcome " + login.username + " <i class='fa fa-user icon'></i>";
        d.appendChild(e);
        e = document.createElement("a");
        e.href = "javascript:loggOut(locals);";
        e.innerHTML = "logg out";
        d.appendChild(e);
    }
}

function loggOut(localstoring, reloadTrue = true){
    localstoring.removeItem("login");
    if(reloadTrue) {
        location.reload();
    }
}
try{
    if (process.env.NODE_ENV == "test") {    
        module.exports = {
            loggOut:loggOut
        }
    }
}catch(err){
    console.log("not node.js");
    initializeLoginStatus();
}