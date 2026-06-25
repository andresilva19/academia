function validateCPF(cpf) {
    cpf = cpf.replace(/[.-]/g,"");
    if (cpf.length !== 11 || /^(\\d)\\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;
    for(let iI = 1; i <= 9; i++){
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    const ultimocaracter = parseInt(cpf.substring(9, 10));
    if(resto !== ultimocaracter){
        return false;
    }

    let soma = 0;
    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    return true;

}

document.getElementById('clientCPF').addEventListener('blur', function (){
    const cpf = this.value;
    if (!validateCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        this.value = ""; // Limpa o campo
    }
});

document.getElementById('formCadastro').addEventListener('submit', function (event){
    event.preventDefault();

    const name = document.getElementById('clientName').value; 
    const CPF = document.getElementById('clientCPF').value;
    const tel = document.getElementById('clientTelefone').value;
    const nascimento = document.getElementById('clientNascimento').value;
    const salario = document.getElementById('clientSalario').value;

    console.log(name);
    console.log(CPF);
    console.log(tel);
    console.log(nascimento);
    console.log(salario);


});