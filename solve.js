// CONSTRAINT
// 1 <= n <= 100

// SAMPLE INPUT
// 25
// SAMPLE OUTPUT
// 15511210043330984000000

const extraLongFactorial = (n) => {
  // DEKLARASI VARIABLE NILAI AWAL
  var sum = 1;

  // LOOPING NILAI MUNDUR dari N hingga 1
  for (let i = n; i > 0; i--) {
    // KALIKAN NILAI SUM DENGAN NILAI N (NILAI N LOOPING MUNDUR HINGGA 1)
    sum *= i;
  }

  // RETURN FAKTORIAL DARI NILAI N DALAM BENTUK BIG INTEGER
  return BigInt(sum);
};

// SAMPLE INPUT
var n = 30;

const result = extraLongFactorial(n);
console.log(result.toString());
