var usuarios = [
    {"email": "Lívia", 
    "cpf": "123",
     "senha": "123"}

    {"email": "Carol",
     "cpf": "123",
      "senha": "123"}

    {"email": "Isadora",
     "cpf": "123", 
     "senha": "123"}

     {"email": "Geovanna",
     "cpf": "123",
      "senha": "123"}
];

function Entrar() {
    var email = document.getElementsByName('email')[0].value.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "index.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
let divUsuarios = document.querySelector
("#usuarios")

fetch("dados.json").then((response) => {
    response.json().then((usuarios) => {
        divUsuarios.innerHTML += usuarios
    })
})