import validator from './validator.js';

//console.log(validator);

let creditCardNumbers = document.getElementById('creditCardNumbers')

const clickAceptar= document.getElementById('aceptar')
clickAceptar.addEventListener('click', verificacion)
clickAceptar.addEventListener('click', validar)
clickAceptar.addEventListener('click', enmascarar)

function verificacion(){
       
    if (creditCardNumbers.value=='') {
        alert('Debes ingresar un numero de tarjeta')
        return false
 
   
 }
}
 
 //Input targeta
creditCardNumbers.addEventListener('keyup', (e) =>{
    let valInput=e.target.value;
     creditCardNumbers.value= valInput
     .replace(/\s/g,'')
     .replace(/\D/g,'')
     .replace(/([0-9]{4})/g,'$1 ')
     .trim();

} );

//validar targeta

function validar (){
    let numeroTarjeta= creditCardNumbers.value;
    let valida= (validator.isValid(numeroTarjeta));

    //console.log(typeof valida)
    if(valida==true){
        alert('Tarjeta Valida')
    }
    else{
        alert('Tarjeta Invalida')
    }

    

}

function enmascarar() {
    let num= creditCardNumbers.value;
    let mascara=(validator.maskify(num));
    creditCardNumbers.value=mascara;
    
}

