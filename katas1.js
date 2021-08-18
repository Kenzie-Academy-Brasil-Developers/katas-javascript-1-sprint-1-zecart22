function oneThroughTwenty() {
	let resultado = []
        for (let i = 1; i < 21; i++){
	resultado.push(i)
        }
	return resultado;
}

        console.log(oneThroughTwenty());
        //1 call function oneThroughTwenty

function evensToTwenty() {
    
	let  resultado = []
  	for (let i = 2; i < 22; i = i + 2){
	resultado.push(i)

	}
  		return resultado;
}
	console.log(evensToTwenty());
	//2 call function evensToTwenty

function oddsToTwenty(numero) {
  	let resultado = []
	for (let i = numero; i < 20; i = i + 2){
		if (i % 2 > 0){
		resultado.push(i)
		}	
	}		  
  		return resultado; 
   
}
	console.log(oddsToTwenty(1))
        //3 call function oddsToTwenty

function multiplesOfFive() {
    
	  let resultado = []
	  for(let i = 5; i < 105; i = i + 5){
	  resultado.push(i)
}
		return resultado;		

}
	console.log(multiplesOfFive())
	//4 call function multiplesOfFive

function squareNumbers(numero) {    

     let resultado = []    
     for (let i = numero; i <= 100; i++){
          let raizQuadrada = (Math.sqrt(i));
          let raizPerfeita = (raizQuadrada ^ 0) === raizQuadrada;
              if ( raizPerfeita === true){
              resultado.push(i)
              }
    }
         return resultado 
  }
	console.log(squareNumbers(1)) 
    	//5 call function squareNumbers

function countingBackwards() {
  let resultado = []
        for (let i = 20; i > 0; i--){
        resultado.push(i)
        }
        return resultado;
}

	console.log(countingBackwards())
	//6 call function countingBackwards

function evenNumbersBackwards() {
	 let resultado = []
        for (let i = 20; i > 0; i = i - 2){
        resultado.push(i)
}
                return resultado;
}
        console.log(evenNumbersBackwards())
        //7 call function evenNumbersBackwards

function oddNumbersBackwards(numero) {  
     let resultado = []
          for(let i = numero; i > 0; i = i - 1){
		if(i % 2 > 0){ 
		resultado.push(i)
		}

	}
                return resultado;
}
        console.log(oddNumbersBackwards(20))
	//8 call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
      	 let resultado = []
          for(let i = 100; i > 0; i = i - 5){
          resultado.push(i)
        }
                return resultado;
}
        console.log(multiplesOfFiveBackwards())
	//9  call function multiplesOfFiveBackwards

function squareNumbersBackwards(numero) {
    let resultado = []    
     for (let i = numero; i > 0; i--){
          let raizQuadrada = (Math.sqrt(i));
          let raizPerfeita = (raizQuadrada ^ 0) === raizQuadrada;
              if ( raizPerfeita === true){
              resultado.push(i)
              }
    }
         return resultado     

}
	console.log(squareNumbersBackwards(100))
	//10 call function squareNumbersBackwards
