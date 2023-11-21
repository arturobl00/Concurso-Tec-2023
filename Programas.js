function multiplesOf3and5(number) {
    let sum = 0,
      i = 3;
    while (i < number) {
      if (i % 3 == 0 || i % 5 == 0){
         sum += i;
         console.log(i);
    }

      i++;
    }
    console.log("La suma es: ",sum);
  }

  
  function sumaFibonacciPares(n) {
    let a = 1; // Primer término de la secuencia
    let b = 2; // Segundo término de la secuencia
    let suma = 0; // Inicializamos la suma de los términos pares
  
    console.log(a, "----", b);
    while (b <= n) {
      if (b % 2 === 0) {
        suma += b; // Sumar término par
      }
  
      const next = a + b;
      a = b;
      b = next;

      console.log(a, "----", b);
    }
  
    return suma;
  }
  

  function factorPrimoMasGrande(number) {
    let factor = 2;
    while (number > 1) {
      console.log(factor);
      if (number % factor === 0) {
        number /= factor;
      } else {
        factor++;
      }
    }
    return factor;
  }
  

  function decimalToBinary(decimalNumber) {
    if (!Number.isInteger(decimalNumber)) {
      return "Por favor, proporciona un número entero.";
    }
    
    const binaryRepresentation = decimalNumber.toString(2);
    return console.log(`El número ${decimalNumber} en binario es: ${binaryRepresentation}`);
  }
  
  function domSigloXX(){
    return console.log("3503 Domingos en el siglo XX");
  }