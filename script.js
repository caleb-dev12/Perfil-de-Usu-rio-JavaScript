function updateUserInfo(event) {
    event.preventDefault();
    // atribuindo o valor digitado nos inputs as informações do perfil
    document.getElementById('userName').textContent = document.getElementById('name').value;
    document.getElementById('userAge').textContent = `Idade: ${document.getElementById('age').value}`
    document.getElementById('userAddress').textContent = `Endereço: ${document.getElementById('address').value}`;
    document.getElementById('userBio').textContent = `Biografia: ${document.getElementById('bio').value}`;
}
