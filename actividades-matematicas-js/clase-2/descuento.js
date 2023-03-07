const inputPrecio = document.querySelector('#price');
const inputDescuento = document.querySelector('#descuento')
const btn = document.querySelector('#calcular');
const pResultado = document.querySelector('#result')


btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    //Formula (p * (100 - d)) / 100


    const precio = Number(inputPrecio.value);
    const descuento = Number(inputDescuento.value);

    if (!precio || !descuento) {
        pResultado.innerText = 'Completa todos los campos en blanco.';
        return;

    }

    if (descuento >= 1000) {
        pResultado.innerText = 'El descuento agregado no es valido Ingresalo correctamente.';
        return;
        
        
    }
   

    const newPrecio = (precio * (100 - descuento)) / 100;
    
    pResultado.innerText = newPrecio + '%';

    
}