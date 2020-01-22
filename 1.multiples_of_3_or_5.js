function multiples(){
  let sum = 0;
  for(let i=0;i<1000;i++){
    if(i%3 === 0 || i%5 === 0){
      sum += i;
    }
    //console.log("loop sum is:",sum);
  }
  console.log("sum is:",sum);
  return sum;
}

multiples();
