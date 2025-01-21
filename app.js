let button = document.getElementById("button");
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email")

button.addEventListener("click",shouldNotEmpty);
function shouldNotEmpty(e){
    if(username.value  == "" || password.value == ""|| email.value == ""){
        e.preventDefault();
        alert("Feild must not be empty")
    }else{
        let variable = username.value.length;
        if(!isNaN(username.value)){
            e.preventDefault();
            alert("Must not contain any number in the username")
        }
        if(variable > 10){
            e.preventDefault();
            alert("Value is exceeding than 10");
        }
    }  
}
