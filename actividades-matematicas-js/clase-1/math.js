console.group('Cuadrado');
const ladosCuadrado = 5;
const perimetroCuadrado = ladosCuadrado * 4;
const areaAlCuadrado = ladosCuadrado * ladosCuadrado;


//Esto nos ayuda a imprimir los objetos que se encuentran en el script (Expecificandolos claramente)
console.log({
    ladosCuadrado,
    perimetroCuadrado,
    areaAlCuadrado,

});

function calculoCuadrado(lado) {
    return{
        perimetro: lado * 4,
        area: lado * lado,

    };
    
}

console.groupEnd('Cuadrado');


//Triangulo
console.group('Triangulo');
const ladoTriangulo1 = 10;
const ladoTriangulo2 = 10;
const ladoTrianguloBase = 8;
const altura = 3;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaAlCuadradoT = (ladoTrianguloBase * altura) / 2;

function calcularTriangulo(lad1, lad2, base, altura) {
    return {
        perimetro: lad1 + lad2 + base + altura,
        area:(base + altura),
    }
    
}

function calcularTrianguloIsosceles(lados, base) {
    if (lados == base) {
        console.warn('Esto no es un isosceles');
        
    }else{
        return Math.sqrt((Math.pow(lados, 2)) - ((base ** 2)) / 4)
    }
    
}

function calcularTrianguloEscaleno(lad1, lad2, lad3){
    if (lad1 == lad2 || lad1 == lad3 || lad2 == lad3) {
        console.warn('No es un triangulo isosceles');
        
    }
    

}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    altura,
    ladoTrianguloBase,
    perimetroTriangulo,
    areaAlCuadradoT,
});

console.groupEnd('Triangulo');

console.group('Circulo');

const radioCirculo = 3;
const diametro = radioCirculo * 2;
const circuferencia = diametro * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;


function calcularCirculo(radioCirculo) {
    const diametroCirculo = radioCirculo * 2;
    //Eleva la potencia a 2
    const radioAlCuadrado = Math.pow(radioCirculo, 2)
    return{
        circuferencia:  diametroCirculo * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
    
}
console.log({
    radioCirculo,
    diametro,
    circuferencia,
    areaCirculo,
})

console.groupEnd('Circulo');






