const aDatos = [{precio: 12}, {precio: 32}, {precio: 56}]

calcularPrecio(12)
aDatos.push({precio: 15})
calcularPrecio()

function mostrarPrecio(precioFinal){
    console.log(
        `
        El precio final es:
        ${precioFinal.toFixed(2)}
        `
    )
}

function calcularPrecio(iva = 21){
    {
        let finalIva = 1 + iva/100        
        aDatos.forEach( elemento => {
            precioFinal = elemento.precio * finalIva
            mostrarPrecio(precioFinal)
        })
    }
}