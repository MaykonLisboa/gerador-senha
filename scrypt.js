function updateValue(value) {
    document.getElementById('lengthValue').textContent = value;
}

function generatePassword() {
    var length = document.getElementById('length').value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function generateAndCopyPassword() {
    var passwordField = document.getElementById('password');
    var copyMsg = document.getElementById('copyMsg');
    var generatedPassword = generatePassword();
    passwordField.value = generatedPassword;
    
    // Copia para a área de transferência
    navigator.clipboard.writeText(generatedPassword).then(() => {
       copyMsg.textContent = 'Senha copiada com sucesso!'
    }, () => {
       copyMsg.textContent = 'Falha ao copiar a senha.'
    });
}