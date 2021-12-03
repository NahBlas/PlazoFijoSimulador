console.log('linkeado')


//Solicito Nombre de usuario
let nombreUsuario = prompt('Ingrese su nombre')


// Mensajes al usuario
alert ('Bienvenido  ' + nombreUsuario )
alert ('1--Deseo Calcular plazo fijo  //   2--No deseo calcular plazo fijo')


//Consigo una opcion para ingresar al programa
let opcion = prompt('Ingrese la opcion')

let acceso = Boolean; //defino variable para su uso

//validacion para entrada al ciclo de ejecucion de calculo
if (opcion == '1'){
acceso = true
console.log(acceso)
}

//declaro variables
let tip = 0
let montoFinal = 0

//procedure principal.
while (acceso == true){
let monto = prompt('Ingrese el monto para su plazo fijo')
console.log(monto)
let plazo = prompt('ingrese plazo en dias 30-90-180-365')
console.log(plazo)
tip = calcularTna(plazo)
montoFinal = calcularTotal(monto, tip, plazo)
alert ('Su plata final es de ' + montoFinal)
}

// creo funcion de calculo de la tna
function calcularTna(plazo){
    return plazo * 30 / 12;
}

//creo funcion para calcular pasando los parametros segun los distintos tipos de Montos,TIP (Taza interes por plazo) y plazo
function calcularTotal (monto, tip, plazo){
    return monto * (tip * plazo / 365)
}

