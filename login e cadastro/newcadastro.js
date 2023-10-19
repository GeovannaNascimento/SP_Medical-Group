var usuarios = [
    {
        email: "julio@email.com",
        cpf: "123",
        senha: "cocorico",
    }
];

function Cadastrar() {
    var email = document.getElementById("email").value.toLowerCase();
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (senha !== confirmPassword) {
        alert("A senha e a confirmação de senha não coincidem. Tente novamente.");
        return;
    };

    var novoUsuario = {
        email: email,
        cpf: cpf,
        senha: senha,
    };

    usuarios.push(novoUsuario);

    window.alert("Cadastro realizado com sucesso!");
};
