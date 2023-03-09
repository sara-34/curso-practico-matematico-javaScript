const inputPrecio = document.querySelector('#price');
const cuponProducto = document.querySelector('#cupon');
const bottonCalcular = document.querySelector('#calcular')
const resultado = document.querySelector('#result');

bottonCalcular.addEventListener('click', calcularCupon);

//Creacion de array con objetos
const arrCupones = [];
arrCupones.push({
    cupones : "Cupon_Mayor",
    descuento : 50,
});

arrCupones.push({
    cupones : "Cupon_Mediano",
    descuento : 40,
});

arrCupones.push({
    cupones : "Cupon_siguiente",
    descuento : 30,
});

arrCupones.push({
    cupones : "Cupon_Pequeño",
    descuento : 20,
});

arrCupones.push({
    cupones : "Ultimo_Cupon",
    descuento : 5
});



/*const cuponesObject = {

    'cupon_Sara' : 50,
    'cuponAlegria' : 40,
    'cuponAmistad' : 30,
    'cuponFinal':20,
};*/


function calcularCupon() {
    const precio = Number(inputPrecio.value);
    const cupon = cuponProducto.value;

    if (!precio || !cupon) {
        resultado.innerText = 'Completa todos los campos en blanco.';
        return;

    }
    let descuento;

    function arrayCupones(cuponElemento) {
       return cuponElemento.cupones == cupon;

        
    } 

   const cuponInArray = arrCupones.find(arrayCupones);

   if (cuponInArray) {
    descuento = cuponInArray.descuento;
   }
   else{
    resultado.innerText = 'El Cupon agregado no existe Ingresalo correctamente.';
    return;

   }

    /*if(cuponesObject[cupon]){
        descuento = cuponesObject[cupon];
    }else{
        resultado.innerText = 'El Cupon agregado no existe Ingresalo correctamente.';
        return;
    }*/



   /* switch (cupon) {
        case 'Cupon_Mayor':
            descuento = 50;
            break;

        case 'Cupon_Mediano':
            descuento = 30;
            break;
    
        default: 
          resultado.innerText = 'El Cupon agregado no existe Ingresalo correctamente.';
          return;
            
    }*/

    /*if(cupon == "Cupon_Mayor"){
        descuento = 50;
    }else if (cupon == "Cupon_Mediano"){
        descuento = 30;
    }else{
        resultado.innerText = 'El Cupon agregado no existe Ingresalo correctamente.';
        return;
    }*/

    const newPrecio = (precio * (100 - descuento)) / 100;
    
    resultado.innerText = '$' + newPrecio;

    
}
