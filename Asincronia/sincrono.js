function sumar(acomulado, valor) {
     const suma = acomulado + valor
     return suma
}

let acomulado = 0
acomulado = sumar(acomulado, 4)
acomulado = sumar(acomulado, 4)
acomulado = sumar(acomulado, 4)

console.log(acomulado)
