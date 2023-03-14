function calcularModa(moda) {
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

function ordenarListaBidimencional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {

        return valorAcumulado[i] - nuevoValor[i]

    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;

}

