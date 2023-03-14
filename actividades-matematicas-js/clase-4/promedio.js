function calcularPromedio(lista) {

    function sumarTodosElementos(valorAcomulado, nuevoValor) {
        return valorAcomulado + nuevoValor;
        
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
    
}