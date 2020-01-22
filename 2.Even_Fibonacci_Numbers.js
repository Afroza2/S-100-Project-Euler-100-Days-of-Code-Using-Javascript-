function evenFib() {
  let sum = 0;
  let a = 1;
  let b = 2;
  //let current = 0;
  sum += b;
  console.log("fib:", sum);
  while (b <= 4000000) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    b = a + b;
    //console.log("a,b", `${a},${b}`);
    if (b % 2 === 0) {
      sum += b;
    }
  }
  console.log("sum is:", sum);
  return sum;
}

evenFib();
