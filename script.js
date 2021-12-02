console.log('linkeado')


//Solicito Nombre de usuario
let nombreUsuario = prompt('Ingrese su nombre')


// Mensajes al usuario
alert ('Bienvenido  ' + nombreUsuario )
alert ('1--Deseo Calcular plazo fijo  //   2--No deseo calcular plazo fijo')


//Consigo una opcion para ingresar al programa
let opcion = prompt('Ingrese la opcion')


//validacion para entrada al ciclo de ejecucion de calculo
if (opcion == '1'){
accesso = true
console.log(accesso)
}


//procedure principal.
while (accesso == true){
let monto = prompt('Ingrese el monto para su plazo fijo')
console.log(monto)
let plazo = prompt('ingrese plazo en dias 30-90-180-365')
console.log(plazo)
calcularTna(tip, plazo)
calcularTotal(montoFinal, monto, tip, plazo)
alert ('Su plata final es de ' + montoFinal)
}


// defino variables para almacenar datos de funciones en ellas.
let montoFinal = 0
//creo funcion para calcular pasando los parametros segun los distintos tipos de Montos,TIP (Taza interes por plazo) y plazo
function calcularTotal (montoFinal, monto, tip, plazo){
    montoFinal = monto*(tip*plazo/365)
}


// defino variables para almacenar datos de funciones en ellas.
let tip = 0
// creo funcion de calculo de la tna
function calcularTna(tip, plazo){
    tip = plazo*30/12
}


