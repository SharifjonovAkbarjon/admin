const admin = document.querySelector(".admin")

// Protect route
let tokin = localStorage.getItem("x-auth-token")

function checkToken(){
    if(!tokin){
        window.location.replace("/login/login.html")
    }
}

checkToken()

function handleLogout(){
    localStorage.removeItem("x-auth-token")
    open("/login/login.html", "_self")
}

function adminInfoRender(){
    let userData = JSON.parse(localStorage.getItem("user"))
    // console.log(userData);
    admin.innerHTML = `
         <img src=${userData.image} alt="">
        <h3>${userData.firstName}</h3>
    `
}

adminInfoRender()
