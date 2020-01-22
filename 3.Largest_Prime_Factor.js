function primeFactor() {
  let n = 600851475143;
  //let n = 13195;
  //let res = [];
  let maxPrime;
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    while (n % i == 0) {
      maxPrime = i;
      n = n / i;
    }
    //res.push(i);
  }
  while (n % 2 === 0) {
    maxPrime = 2;
    n = n / 2;
  }

  if (n > 2) {
    maxPrime = n;
  }
  console.log(maxPrime);
  return maxPrime;
}

primeFactor();
