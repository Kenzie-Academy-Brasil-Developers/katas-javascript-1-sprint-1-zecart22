function oneThroughTwenty() {
	let resultado
        for (let contador = 1; contador < 21; contador++){
        console.log(contador)
        }
	return resultado;
}

        console.log(oneThroughTwenty());
        //1 call function oneThroughTwenty

function evensToTwenty() {
    
	let  resultado
  	for (let contador = 2; contador < 22; contador = contador +  2){
	console.log(contador)

	}
  		return resultado;
}
	console.log(evensToTwenty());
	//2 call function evensToTwenty

function oddsToTwenty() {
  	let resultado
	for (let contador = 1; contador < 22; contador = contador + 2){
	console.log(contador)
}  
  		return resultado; 
   
}
	console.log(oddsToTwenty())
        //3 call function oddsToTwenty

function multiplesOfFive() {
    
	  let resultado
	  for(let contador = 5; contador < 105; contador = contador + 5){
	  console.log(contador)
}
		return resultado;		

}
	console.log(multiplesOfFive())
	//4 call function multiplesOfFive

function squareNumbers(numero) {    
//function quadradaPerfeita(numero){
     let resultado    
     for (let contador = numero; contador < 100; contador++){
          let raizQuadrada = (Math.sqrt(contador));
          let raizPerfeita = (raizQuadrada ^ 0) === raizQuadrada;
              if ( raizPerfeita === true){
              console.log( "A raiz quadrada de ", contador, "é",raizQuadrada, " raiz perfeita é = ", raizPerfeita)
              }
    }
         return resultado 
  }
	console.log(squareNumbers(1)) 
    	//5 call function squareNumbers

function countingBackwards() {
  let resultado
        for (let contador = 20; contador > 0; contador--){
        console.log(contador)
        }
        return resultado;
}

	console.log(countingBackwards())
	//6 call function countingBackwards

function evenNumbersBackwards() {
    let resultado
	for (contador = 20, contador > 0, contador = contador - 2 ){
	console.log(contador)
	}
	return resultado
}
	console.log(evenNumbersBack)
	//7 call function evenNumbersBackwards

function oddNumbersBackwards() {  
   let resultado 
          for(let contador = 21; contador > 0; contador = contador - 2){
          console.log(contador)
	}
                return resultado;
}
        console.log(oddNumbersBackwards())
	//8 call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
      	 let resultado
          for(let contador = 100; contador > 0; contador = contador - 5){
          console.log(contador)
        }
                return resultado;
}
        console.log(multiplesOfFiveBackwards())
	//9  call function multiplesOfFiveBackwards

function squareNumbersBackwards(100) {
    let resultado    
     for (let contador = numero; contador > 0; contador--){
          let raizQuadrada = (Math.sqrt(contador));
          let raizPerfeita = (raizQuadrada ^ 0) === raizQuadrada;
              if ( raizPerfeita === true){
              console.log( "A raiz quadrada de ", contador, "é",raizQuadrada, " raiz perfeita é = ", raizPerfeita)
              }
    }
         return resultado     

}
	console.log(squareNumbersBackwards(100))
	//10 call function squareNumbersBackwards
