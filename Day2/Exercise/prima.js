const angka1 = 7 
    let pembagi = 0;
    for(let i=1; i <= angka1; i++){
      if(angka1%i == 0){
        pembagi++
      }
    }
    if(pembagi == 2){
      console.log("Angka "+ angka1 + " prima")
    }else{
      console.log("Angka "+ angka1 + " bukan prima")
    }
  

    const angka2 = 6
    let pembagi1 = 0;
    for(let i=1; i <= angka2; i++){
      if(angka2%i == 0){
        pembagi1++
      }
    }
    if(pembagi1 == 2){
      console.log("Angka "+ angka2 + " prima")
    }else{
      console.log("Angka "+ angka2 + " bukan prima")
    }
  
    //cara simple
    let number = 12
    let divider = 0
      for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
          divider++
        }
      }  
        console.log (
          divider == 2 ?
          `${number} is prime number`:
          `${number} is not prime number`
        )