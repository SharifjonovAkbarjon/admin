const form = document.querySelector(".form")
const inputUsername = document.querySelector(".form__input-username")
const inputPassword = document.querySelector(".form__input-password")
const API_URL = "https://dummyjson.com"

form.addEventListener("submit", e=>{
    e.preventDefault()
    let user = {
        username: inputUsername.value,
        password: inputPassword.value,
    }

    fetch(`${API_URL}/auth/login`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
        if(res.token){
            localStorage.setItem('user', JSON.stringify(res))
            localStorage.setItem("x-auth-token", res.token)
            open("/admin/admin.html", "_self")
        }else{
            alert("username or password is incorrect")
        }

    })

})