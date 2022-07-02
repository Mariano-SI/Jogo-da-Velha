//Selecionando os elementos a serem inseridos no jogo (X e )
let x = document.querySelector(".x");
let o = document.querySelector(".o");

//Selecionando as box
let boxes = document.querySelectorAll(".box");

//Container dos botões
let buttons = document.querySelectorAll("#buttons-container button");

//Caixa e texto de mensagem
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p")

let secondPlayer; // variavel de auxilio no 2 players x IA

//contador de jogadas

let player1 = 0;
let player2 = 0;

//Ver quem joga

function vezDe(player1, player2) {
    if (player1 == player2) {
        //vez do x
        elemento = x; // define o elemento a ser inserido
    } else {
        //vez do o
        elemento = o;
    }
    return elemento;
}

//Evento de clique nos boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        let elemento = vezDe(player1, player2);

        //Conferindo se a box da vez está vazia
        if (this.childNodes.length == 0) {
            let cloneElemento = elemento.cloneNode(true) //clono o elemento para usa-lo varias vezes
            this.appendChild(cloneElemento) //o append é aplicado a um novo clone

            //mudando proximo turno
            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'ai-player') {
                    //funcao para fazer jogada da "IA"
                    jogadaComputador();
                    player2++;
                }
            } else {
                player2++;
            }
            //Checa quem venceu:
            checkVencedor();
        }
    });
}
//2 players ou IA

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }

        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}

//Checar quem venceu:
function checkVencedor() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //Verificicação horizontal:
    //Verifico se todos estão preenchidos:
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declaraVencedor('x');
        }
        else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declaraVencedor('o');
        }

    }
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declaraVencedor('x');
        }
        else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declaraVencedor('o');
        }

    }
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        }
        else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }

    }
    //Verificação vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        }
        else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }

    }
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declaraVencedor('x');
        }
        else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declaraVencedor('o');
        }

    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        }
        else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }

    }

    //Verificando diagonais
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        }
        else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        //Verifico se as classes dos filhos são a mesma
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        }
        else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }
    }
    //Velha
    let contador = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            contador++;
        }
    }
    if (contador == 9) {
        console.log("Deu velha")
        declaraVencedor('velha');
    }
}

//Limpar o jogo, declarar o vencedor, atualizar o placar

function declaraVencedor(vencedor) {


    let scoreboardX = document.querySelector("#scoreboard-1")
    let scoreboardO = document.querySelector("#scoreboard-2")
    let msg = '';

    if (vencedor == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (vencedor == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha";
    }
    //exibe msg e reseto o jogo
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide")

    //esconde msg dnovo
    setTimeout(() => {
        messageContainer.classList.add("hide");
        //reseta jogo:
        player1 = 0;
        player2 = 0;
        let limpaBoxes = document.querySelectorAll(".box div");
        for (let i = 0; i < limpaBoxes.length; i++) {
            limpaBoxes[i].parentNode.removeChild(limpaBoxes[i]);
        }
    }, 2500);
}

function jogadaComputador() {
    let cloneO = o.cloneNode(true);
    let contador = 0;
    let preenchidos = 0;


    for (let i = 0; i < boxes.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 5);

        //só preenche se não tem filho
        if (boxes[i].childNodes[0] == undefined) {
            if (numeroAleatorio <= 1) {
                boxes[i].appendChild(cloneO);
                contador++;
                break
                //checagem dos preenchidos
            } else {
                preenchidos++;
            }
        }
    }
    if (contador == 0 && preenchidos < 9) {
        jogadaComputador();
    }
}
