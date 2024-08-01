var qntJogadas = 0;
var campo1 = document.getElementById("campo1");
var campo2 = document.getElementById("campo2");
var campo3 = document.getElementById("campo3");
var campo4 = document.getElementById("campo4");
var campo5 = document.getElementById("campo5");
var campo6 = document.getElementById("campo6");
var campo7 = document.getElementById("campo7");
var campo8 = document.getElementById("campo8");
var campo9 = document.getElementById("campo9");
var ganhadorCampo1 = 0
var ganhadorCampo2 = 0
var ganhadorCampo3 = 0
var ganhadorCampo4 = 0
var ganhadorCampo5 = 0
var ganhadorCampo6 = 0
var ganhadorCampo7 = 0
var ganhadorCampo8 = 0
var ganhadorCampo9 = 0
var campoJogado1 = false;
var campoJogado2 = false;
var campoJogado3 = false;
var campoJogado4 = false;
var campoJogado5 = false;
var campoJogado6 = false;
var campoJogado7 = false;
var campoJogado8 = false;
var campoJogado9 = false;

function fazerJogadaCampo1() {
    if (campoJogado1 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx1");
            imagemx.style.visibility = "visible";
            ganhadorCampo1 = 1
        } else {
            let imagemx = document.getElementById("imagemb1");
            imagemx.style.visibility = "visible"
            ganhadorCampo1 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado1 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function fazerJogadaCampo2() {
    if (campoJogado2 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx2");
            imagemx.style.visibility = "visible";
            ganhadorCampo2 = 1
        } else {
            let imagemx = document.getElementById("imagemb2");
            imagemx.style.visibility = "visible"
            ganhadorCampo2 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado2 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}



function fazerJogadaCampo3() {
    if (campoJogado3 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx3");
            imagemx.style.visibility = "visible";
            ganhadorCampo3 = 1
        } else {
            let imagemx = document.getElementById("imagemb3");
            imagemx.style.visibility = "visible"
            ganhadorCampo3 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado3 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function fazerJogadaCampo4() {
    if (campoJogado4 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx4");
            imagemx.style.visibility = "visible";
            ganhadorCampo4 = 1
        } else {
            let imagemx = document.getElementById("imagemb4");
            imagemx.style.visibility = "visible"
            ganhadorCampo4 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado4 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function fazerJogadaCampo5() {
    if (campoJogado5 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx5");
            imagemx.style.visibility = "visible";
            ganhadorCampo5 = 1
        } else {
            let imagemx = document.getElementById("imagemb5");
            imagemx.style.visibility = "visible"
            ganhadorCampo5 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado5 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function fazerJogadaCampo6() {
    if (campoJogado6 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx6");
            imagemx.style.visibility = "visible";
            ganhadorCampo6 = 1
        } else {
            let imagemx = document.getElementById("imagemb6");
            imagemx.style.visibility = "visible"
            ganhadorCampo6 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado6 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function fazerJogadaCampo7() {
    if (campoJogado7 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx7");
            imagemx.style.visibility = "visible";
            ganhadorCampo7 = 1
        } else {
            let imagemx = document.getElementById("imagemb7");
            imagemx.style.visibility = "visible"
            ganhadorCampo7 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado7 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function fazerJogadaCampo8() {
    if (campoJogado8 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx8");
            imagemx.style.visibility = "visible";
            ganhadorCampo8 = 1
        } else {
            let imagemx = document.getElementById("imagemb8");
            imagemx.style.visibility = "visible"
            ganhadorCampo8 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado8 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function fazerJogadaCampo9() {
    if (campoJogado9 === false) {
        if (qntJogadas % 2 === 0) {
            let imagemx = document.getElementById("imagemx9");
            imagemx.style.visibility = "visible";
            ganhadorCampo9 = 1
        } else {
            let imagemx = document.getElementById("imagemb9");
            imagemx.style.visibility = "visible"
            ganhadorCampo9 = 2
        }
    } else {
        alert("Esse campo já foi usado");
    }
    campoJogado9 = true;
    setTimeout(validarVencedor,100);
    qntJogadas++;
}

function validarVencedor() {

    if (
        (ganhadorCampo1 === ganhadorCampo2 && ganhadorCampo2 === ganhadorCampo3 && ganhadorCampo1 !== 0) || // Linha 1
        (ganhadorCampo4 === ganhadorCampo5 && ganhadorCampo5 === ganhadorCampo6 && ganhadorCampo4 !== 0) || // Linha 2
        (ganhadorCampo7 === ganhadorCampo8 && ganhadorCampo8 === ganhadorCampo9 && ganhadorCampo7 !== 0) || // Linha 3
        (ganhadorCampo1 === ganhadorCampo4 && ganhadorCampo4 === ganhadorCampo7 && ganhadorCampo1 !== 0) || // Coluna 1
        (ganhadorCampo2 === ganhadorCampo5 && ganhadorCampo5 === ganhadorCampo8 && ganhadorCampo2 !== 0) || // Coluna 2
        (ganhadorCampo3 === ganhadorCampo6 && ganhadorCampo6 === ganhadorCampo9 && ganhadorCampo3 !== 0) || // Coluna 3
        (ganhadorCampo1 === ganhadorCampo5 && ganhadorCampo5 === ganhadorCampo9 && ganhadorCampo1 !== 0) || // Diagonal 1
        (ganhadorCampo3 === ganhadorCampo5 && ganhadorCampo5 === ganhadorCampo7 && ganhadorCampo3 !== 0)    // Diagonal 2
    ) {

        if (qntJogadas % 2 == 0) {
            alert("Jogador 2 ganhou !!!")
        } else {
            alert("Jogador 1 ganhou !!!")
            
        }
        let campos = [campo1,campo2,campo3,campo4,campo5,campo6,campo7,campo8,campo9];
        campos.forEach(campo => {
            campo.removeAttribute("onclick");
            campo.style.cursor = "default";
        })
    }
}