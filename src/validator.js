
const validator = {
  isValid:function(creditCardNumbers){
    const aArreglo= Array.from(creditCardNumbers)
    const aNumeros= aArreglo.map(i=>Number(i));
    //let tarjetaValida;
          
   //console.log(aArreglo)
   //console.log(aNumeros)
   //algoritmo de luhn
   const numeroInvertido= aNumeros.reverse()
   //console.log(numeroInvertido)
  
   const numerosPares=numeroInvertido.filter(function(elemento, index) {    //obteniendo numeros pares
       return(index%2)=== 1
   })
   //console.log(numerosPares)

   const numerosImPares=numeroInvertido.filter(function(elemento, index) {    //obteniendo numeros Impares
    return(index%2)=== 0
   })
   //console.log(numerosImPares)

   const acumular= (acumulador,numero)=>acumulador+numero;

   const numerosImparesR=numerosImPares.reduce(acumular);
   //console.log(numerosImparesR)

   const porDos=numerosPares.map(function(x){
     return(x*2);
   })
   //console.log(porDos)
   const menoresDeDiez= porDos.filter(porDos=>porDos<10);
   //console.log(menoresDeDiez)
   const menoresDeDiezR= menoresDeDiez.length> 0 ? menoresDeDiez.reduce(acumular) : 0;
   //console.log(menoresDeDiezR)
   const mayoresDeDiez= porDos.filter(porDos=>porDos>=10);
   //console.log(mayoresDeDiez)

   const restaMayoresDeDiez= mayoresDeDiez.map(function(x){
     return(x-9);
   })
   //console.log(restaMayoresDeDiez);

   
   let restaMayoresDeDiezR=restaMayoresDeDiez.length> 0 ? restaMayoresDeDiez.reduce(acumular) : 0;
   //console.log(restaMayoresDeDiezR)

   const sumaTotal1= menoresDeDiezR+restaMayoresDeDiezR
   //console.log(sumaTotal1)

   const sumaTotal2= sumaTotal1+numerosImparesR
   //console.log(sumaTotal2)

   
   if ((sumaTotal2 % 10 ==0)) {
    return true;
   } else {
    return false;
   }
   //return tarjetaValida;
   
  },
  
  maskify: function(creditCardNumbers){

    if(creditCardNumbers.length<4){
      return creditCardNumbers
    }else{
      let last4=''
      for(let i=creditCardNumbers.length-4; i < creditCardNumbers.length; i++){
        last4 += creditCardNumbers[i]
      }
      let mask=''
      for(let j=0; j<creditCardNumbers.length-4; j++){
        mask +='#'
      }
      return mask+last4
    }
    }

  
       
    
   
  
  
};

export default validator;
