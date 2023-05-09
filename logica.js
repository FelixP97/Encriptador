var btnencriptar = document.querySelector(".encriptar");
var btndesencriptar = document.querySelector(".desencriptar");
var btncopiar = document.querySelector(".copiar")
var final = document.querySelector(".final");
var muneco= document.querySelector(".textos");
var resultado = document.querySelector(".resultado");



btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.onclick= copiarTexto;

function encriptar(){
    ocultar_mostrar();
    resultado.value = encriptando(recuperarTexto());
}

function desencriptar(){
    ocultar_mostrar();
    resultado.value = desencriptando(recuperarTexto());
}

function copiarTexto(){
    resultado.focus();
    navigator.clipboard.writeText(resultado.value);
}

function recuperarTexto(){
    var area = document.querySelector(".texto");
    return area.value;
}

function ocultar_mostrar(){
    muneco.classList.add("ocultar");
    final.classList.add("mostrar");
}

function encriptando(mensaje){
    var textoFinal ="";

    for(var i=0;i<mensaje.length;i++){
        if(mensaje[i]=="a"){
            textoFinal=textoFinal+"ai"
        }else if(mensaje[i]=="e"){
            textoFinal=textoFinal+"enter"
        }else if(mensaje[i]=="i"){
            textoFinal=textoFinal+"imes"
        }else if(mensaje[i]=="o"){
            textoFinal=textoFinal+"ober"
        }else if(mensaje[i]=="u"){
            textoFinal=textoFinal+"ufat"
        }else{
            textoFinal=textoFinal+mensaje[i];
        }
    }
    return textoFinal;
}

function desencriptando(mensaje){
    var texto= mensaje;
    var textoFinal ="";

    for(var i=0;i<mensaje.length;i++){
        if(mensaje[i]=="a"){
            textoFinal=textoFinal+"a"
            i=i+1;
        }else if(mensaje[i]=="e"){
            textoFinal=textoFinal+"e"
            i=i+4;
        }else if(mensaje[i]=="i"){
            textoFinal=textoFinal+"i"
            i=i+3;
        }else if(mensaje[i]=="o"){
            textoFinal=textoFinal+"o"
            i=i+3;
        }else if(mensaje[i]=="u"){
            textoFinal=textoFinal+"u"
            i=i+3;
        }else{
            textoFinal=textoFinal+mensaje[i];
        }
    }
    return textoFinal;
}