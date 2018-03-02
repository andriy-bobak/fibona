// // За допомогою циклу for

// let k = 20; // потрібно ввести більше число, щоб побачити більше можливих значень
// let fib = [0, 1]; 

// for (i = 2; i < k; i++) {
  
//   fib[i] = fib[i-1] + fib[i-2];
// }

// alert (fib.slice (0, k));




// За допомогою function

function fib(n) {
if (n==1 || n==2) return 1;
else return fib(n-2)+fib(n-1);		
}
let userNum=+prompt('Введіть число'); 
alert(fib(userNum));