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

    console.log({ porcentajesCrecimiento, medianaPorPorcentajeDeCrecimiento });

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorPorcentajeDeCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;


    return nuevoSalario;
}

//Analisis empresarial

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};

        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log({ empresas });

//Mediana empresa

function medianaEmpresaAnios(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');

    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios durante este año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }

}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaAnios(nombre, year);
        });

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorPorcentajesDeCrecimiento = PlatziMath.calcularMediana
            (porcentajesCrecimiento);

        const ultimaMedianaSalario = listaMedianaYears[listaMedianaYears.length -1];
        const aumento = ultimaMedianaSalario * medianaPorPorcentajesDeCrecimiento;
        const nuevaMedianaSalario = ultimaMedianaSalario + aumento;

        console.log({ porcentajesCrecimiento, medianaPorPorcentajesDeCrecimiento });
        return nuevaMedianaSalario;
    }

}

//Analisis general.

function medianaGeneral() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const medianaOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianaOrdenadas.slice(limite, medianaOrdenadas.length);
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
    
}