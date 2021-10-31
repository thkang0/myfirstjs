const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const username = document.getElementById("username");

const storedUsername = localStorage.getItem("username");

function loginUsername(event){
    event.preventDefault();
    //console.log(username.value);
    loginForm.classList.add("hidden");

    username.classList.remove("hidden");
    username.innerText = loginInput.value;
    localStorage.setItem("username", loginInput.value);
    

}

if (storedUsername === null){
    loginForm.addEventListener("submit", loginUsername);    
} else{
    loginForm.classList.add("hidden");
    username.classList.remove("hidden");
    username.innerText = storedUsername;
}

