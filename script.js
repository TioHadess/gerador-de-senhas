let slider_element = document.querySelector("#slider");
let button_element = document.querySelector("#button");

let tamanho_senha = document.querySelector("#valor");
let password = document.querySelector("#password");

let container_password = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ0123456789!@#$%";
let nova_senha = "";

tamanho_senha.innerHTML = slider_element.value

slider.oninput = function(){
    tamanho_senha.innerHTML = this.value;
}

function gerador_senha(){
    let pass = "";
    for(let i = 0, n = charset.length; i < slider_element.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    container_password.classList.remove("hide");
    password.innerHTML = pass;
    nova_senha = pass;
}

function copiar_senha(){
    navigator.clipboard.writeText(nova_senha)
}