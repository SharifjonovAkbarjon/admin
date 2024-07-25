
const link = document.querySelector(".link")

function  checkLinkStatus(){
    let token = localStorage.getItem("x-auth-token")
    if(token){
        link.textContent = "Admin"
        link.setAttribute("href", "./admin/admin.html")

    }else{
        link.textContent = "Login"
        link.href = "./login/login.html"
    }
}

checkLinkStatus()

