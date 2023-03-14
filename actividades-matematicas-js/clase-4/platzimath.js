//Sirve para la reutilizacion de las funciones.
const PlatziMath = {};

/*function esPar(lista) {
   for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
        console.log('El numero ' + lista[i] + ' ' + 'es par'); 
    }else{
        console.log('El numero ' + lista[i] + ' ' + 'es impar');
    }
    
   }
    
}*/

//Opcion 1
PlatziMath.par = function par(lista) {
    return !(lista.length % 2);
}

//Opcion 2
PlatziMath.imPar = function imPar(lista) {
    return lista.length % 2;
    
}

//Funcion para calcular mediana.


PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.par(lista);

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades)
        return medianaListaPar;



        
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const mitadListaImpar = lista[indexMitadListaImpar];
        console.log(mitadListaImpar);
        return mitadListaImpar;
    }
    
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {

    function sumarTodosElementos(valorAcomulado, nuevoValor) {
        return valorAcomulado + nuevoValor;
        
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
    
}

//Ordenar Listas de array

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        /*if (valorAcumulado > nuevoValor) {
            return 1;
            
        }else if (valorAcumulado == nuevoValor) {
            return 0;
            
        }else{
            return -1;
        }*/

        return valorAcumulado - nuevoValor
        
    }

    const lista = listaDesordenada.sort((a,b) => a-b);
    return lista;
    
}

PlatziMath.calcularModa = function calcularModa(moda) {
    const guardarModa = {};
    for (let i = 0; i < moda.length; i++) {
        const element = moda[i];

        if (guardarModa[element]) {
            guardarModa[element] += 1;
        } else {
            guardarModa[element] = 1;
        }

    }

    const listaArray = Object.entries(guardarModa);
    const listaOrdenada = ordenarListaBidimencional(listaArray, 1);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1]
    //console.log(guardarModa, listaArray, listaOrdenada, listaOrdenadaMaxNumber);
    const modaEs = listaOrdenadaMaxNumber[0];
    return modaEs;

    //console.log('La moda es: ' + listaOrdenadaMaxNumber[0]);


}

PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {

        return valorAcumulado[i] - nuevoValor[i]

    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;

}