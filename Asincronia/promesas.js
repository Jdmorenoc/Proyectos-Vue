function sumar(acumulado, valor) {
     return new Promise(function(resolve, reject) {   
          if(valor == 2) return reject("Los numeros 2 son de mala suerte")

          let suma
          setTimeout(function () {
               suma = acumulado + valor
               resolve(suma)
          }, 1000);
     })

}

let acumulado = 0
//------ Promesas --------
sumar(acumulado, 4)
     .then(function(suma) {
          return sumar(suma, 4)
     })
     .then(function(suma) {
          return sumar(suma,2)
     })
     .then(function(suma) {
          console.log(suma)
     })
     .catch(function(error){
          console.log(error)
     })

     console.log("Estoy al final")
