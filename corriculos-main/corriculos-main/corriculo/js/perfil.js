const nome = document.querySelector("#nome");
const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");
const cidade = document.querySelector("#cidade");
botaoEditar.addEventListener("click", function() {
    const novoNome = prompt("Digite seu novo nome:");
    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }
    const novaCidade = prompt("Digite sua nova cidade:");
    if (novaCidade !== null && novaCidade.trim() !== "") {
        cidade.textContent = novaCidade.trim();
    }
});
botaoSair.addEventListener("click", function() {
    const resposta = confirm("Deseja sair do perfil?");
    if (resposta) {
        alert("Você saiu do perfil!");
    }
});