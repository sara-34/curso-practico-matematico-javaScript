const numerosCalculadora = document.querySelector('.numeros');
const numeroUno = document.querySelector('#uno');
const numeroDos = document.querySelector('#dos');
const numeroTres = document.querySelector('#tres');
const numeroCuatro = document.querySelector('#cuatro');
const numeroCinco = document.querySelector('#cinco');
const numeroSeis = document.querySelector('#seis');
const numeroSiete = document.querySelector('#siete');
const numeroOcho = document.querySelector('#ocho');
const numeroNueve = document.querySelector('#nueve');
const numeroCero = document.querySelector('#cero');
const resultado = document.querySelector('#resultado')
const sumando = document.querySelector('#suma');
const restando = document.querySelector('#resta');
const multiplicando = document.querySelector('#multiplicar');
const dividiendo = document.querySelector('#dividir');
const igualacion = document.querySelector('#igual')
const limpiando = document.querySelector('#limpiar');
let num1;
let num2;
let operacion;
let variableTemporal;


sumando.addEventListener('click', suma);
restando.addEventListener('click',resta);
multiplicando.addEventListener('click',multiplicacion);
dividiendo.addEventListener('click',division);
limpiando.addEventListener('click',limpiar);
igualacion.addEventListener('click', igual);
numeroUno.addEventListener('click', uno);
numeroDos.addEventListener('click', dos);
numeroTres.addEventListener('click', tres);
numeroCuatro.addEventListener('click', cuatro);
numeroCinco.addEventListener('click', cinco);
numeroSeis.addEventListener('click', seis);
numeroSiete.addEventListener('click', siente);
numeroOcho.addEventListener('click', ocho);
numeroNueve.addEventListener('click', nueve);
numeroCero.addEventListener('click', cero);

function uno() {
    const presionarUno = numeroUno.value;
    resultado.innerText += presionarUno;
    
}

function dos() {
    const presionarDos = numeroDos.value;
    resultado.innerText += presionarDos;
}
function tres() {
    const presionarTres = numeroTres.value;
    resultado.innerText += presionarTres;
}
function cuatro() {
    const presionarCuatro = numeroCuatro.value;
    resultado.innerText += presionarCuatro;
}
function cinco() {
    const presionarCinco = numeroCinco.value;
    resultado.innerText += presionarCinco;
}
function seis() {
    const presionarSeis = numeroSeis.value;
    resultado.innerText += presionarSeis;
}
function siente() {
    const presionarSiete = numeroSiete.value;
    resultado.innerText += presionarSiete;
}
function ocho() {
    const presionarOcho = numeroOcho.value;
    resultado.innerText += presionarOcho;
}
function nueve() {
    const presionarNueve = numeroNueve.value;
    resultado.innerText += presionarNueve;
}
function cero() {
    const presionarCero = numeroCero.value;
    resultado.innerText +=  presionarCero;
    
}

function guardar() {
    num1 = resultado.innerText;
    console.log(num1);
    variableTemporal = resultado.innerText;
    console.log(variableTemporal)
    num2 = resultado.innerText;
    console.log(num2)
    
}

function suma() {
    num1 = resultado.innerText;
    variableTemporal = '+'
    guardar();

    
}

function resta() {

}

function multiplicacion() {

}

function division() {

}

function limpiar() {

    resultado.innerText = " ";
}

function igual() {
    
}




















