console.log(salarios);

//Analisis Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
/*const persona = salarios.find((persona) => {  //Contiene la propiedad name y tiene el array trabajos
    return persona.name == personaEnBusqueda; 
});
return persona;*/
}


function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalario = PlatziMath.calcularMediana(salarios)
    return medianaSalario;
};


function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorPorcentajeDeCrecimiento = PlatziMath.calcularMediana
        (porcentajesCrecimiento);
    
        console.log({porcentajesCrecimiento, medianaPorPorcentajeDeCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorPorcentajeDeCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;


    return nuevoSalario;
}