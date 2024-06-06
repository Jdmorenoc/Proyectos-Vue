function sumar(acomulado, valor, callback) {
     setTimeout(function () {
          suma = acomulado + valor
          callback(suma)
     }, 1000);
}

let acomulado = 0
sumar(acomulado, 4, function (suma) {
     sumar(suma, 4, function(suma){
          sumar(suma, 4, function(suma){
               sumar(suma, 4, function(suma){
                    sumar(suma, 4, function(suma){
                         sumar(suma, 2, function(suma){
                              console.log(suma)
                         })
                    })
               })
          })
     })
})
