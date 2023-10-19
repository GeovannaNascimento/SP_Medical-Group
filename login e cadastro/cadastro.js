var usuarios =[
    {
        email: "julio@email.com",
        cpf: "123",
        senha:"cocorico",
    }
]



function Cadastrar() {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        var email = document.getElementById("email").value.toLowerCase();
        var cpf = document.getElementById("cpf").value;
        var senha = document.getElementById("password").value;
    
        var novoUsuario = {
            email: email,
            cpf: cpf,
            senha: senha
        };
    
        usuarios.push(novoUsuario);
    
        window.alert("Cadastro realizado com sucesso!");
    });
}