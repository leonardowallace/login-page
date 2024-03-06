function validarFormulario() {
    var login = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    if (login === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Simulação de envio para o servidor
    if (login === "admin@gmail.com" && senha === "admin123") {
        alert("Login bem-sucedido!");
        window.location.href = "home.html"; // Redireciona para a página interna
        return false; // Certifique-se de retornar false para evitar o envio padrão do formulário
    } else {
        alert("Credenciais inválidas. Tente novamente.");
        return false;
    }
}
