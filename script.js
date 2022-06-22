const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");


function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}
function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function Desencriptar(StringParaDesencriptar){
    let matrizCodigo1 = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo1.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigo1[i][1])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo1[i][1], matrizCodigo1[i][0])
        }
    }
    return StringParaDesencriptar;
}