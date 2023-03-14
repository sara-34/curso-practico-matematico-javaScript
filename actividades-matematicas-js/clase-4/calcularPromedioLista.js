
/*function promedio(num1, num2,num3 ) {
    const suma = num1 + num2 + num3;

    return{
        
        promedio : suma / 3
        
    };
}*/

/////////////////////////////////////////////////////////////////////
//Calculando el promedio de un array

function calcularPromedi(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
        
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
    
}