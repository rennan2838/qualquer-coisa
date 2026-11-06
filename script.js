let xp = 0;
let nivel = 1;
let xpMaximo = 1000;


// Define quanto XP é necessário para o nível atual
function atualizarXpMaximo() {

    if (nivel === 1) {
        xpMaximo = 1000;
    } 
    
    else {
        xpMaximo = ((nivel) * 1000);
    }

}


// Concluir missão e ganhar XP
function concluirMissao(valor) {

    xp += valor;

    verificarNivel();

    atualizarBarra();

    //verificarConquistas(); //só para brincar

}


// Verifica se o jogador subiu de nível
function verificarNivel() {

    while (xp >= xpMaximo) {

        xp -= xpMaximo;

        nivel++;

        atualizarXpMaximo();

        alert("🎉 Você subiu para o nível " + nivel + "!");
    }

}


// Atualiza informações da tela
function atualizarBarra() {

    document.getElementById("xp").textContent = xp;

    document.getElementById("xp-max").textContent = xpMaximo;

    document.getElementById("nivel").textContent = nivel;

    let porcentagem = (xp / xpMaximo) * 100;

    document.getElementById("xp-barra").style.width = porcentagem + "%";

}


// Lista de missões
let missoes = [

    {
        nome: "Primeiro código",
        descricao: "Executar seu primeiro JavaScript",
        xp: 100
    },

    {
        nome: "Criar uma função",
        descricao: "Criar sua primeira função",
        xp: 150
    },

    {
        nome: "Manipular o DOM",
        descricao: "Alterar um elemento HTML usando JS",
        xp: 200
    },

    {
        nome: "Criar sistema de XP",
        descricao: "Implementar o sistema de experiência",
        xp: 300
    }

];


// Carrega as missões na tela
function carregarMissoes() {

    let lista = document.getElementById("lista-missoes");

    lista.innerHTML = "";

    missoes.forEach(function(missao, indice) {

        let elemento = document.createElement("div");

        elemento.classList.add("mission");

        elemento.innerHTML = `

            <div>

                <h3>${missao.nome}</h3>

                <p>${missao.descricao}</p>

            </div>

            <button onclick="concluirMissao(${missao.xp})">

                +${missao.xp} XP

            </button>

        `;

        lista.appendChild(elemento);

    });

}

atualizarXpMaximo();
atualizarBarra();
carregarMissoes();
// Verifica conquistas
/*function verificarConquistas() {

    if (xp >= 500) {

        alert("🏆 Conquista desbloqueada!");

    }

}*/


// Inicialização

