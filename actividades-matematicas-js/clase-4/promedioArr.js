function calcularPromedio(lista) {
    //Array Function.
    //Primera forma.

    const sumarTodosElementos = (valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    };

    const sumaLista = lista.reduce(sumarTodosElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;

    //Segunda forma El array Function lo que nos permite hacer es que podemos agregar la funcion sin necesidad de corchetes.

    //Se utiliza para enviar a los metodos arrays.
    //const ejemplo = (a , b) => a +b;

    //const sumarTodosElementos1 = 
    //(valorAcomulado, nuevoValor) => valorAcomulado + nuevoValor;
    //const sumaLista1 = lista.reduce(sumarTodosElementos1);

   // const promedio1 = sumaLista1 / lista.length;
    //console.log(promedio1);
    //return promedio1;

    //Suma Lista de elementos.

    //const sumandoLista = (a, b) => a + b;
    
}