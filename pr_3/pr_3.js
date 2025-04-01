// 1.Write a JAVASCRIPT Program to display multiplication table of a given number integer using a while loop.
// let n = 3;
// let i = 1;
// while(i <= 10) {
//     console.log(`${n} x ${i} = ${n * i}`);
//     i++;
// }
// output:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30



// 2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop.
// let number = 3;
// let result = 1;
// let i = 1;
// while (i <= number) {
//   result *= i;
//   i++;
// }
// console.log('Factorial of ' + number + ' is: ' + result);
// output:Factorial of 3 is: 6



// 3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop.
// let num = 153;
// let original = num;
// let reverse = 0;

// do{
//     let rem = num % 10;
//     reverse = reverse + rem ** 3;
//     num = Math.floor(num / 10)
// }while(num > 0)

// if(original == reverse){
//     console.log("number is armstrong number")
// }else{
//     console.log("number is not armstrong number")
// }
// output:number is armstrong number



// 4. Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop.
// let num = 1331;
// let original = num ;
// let reverse = 0 ;
// while(num > 0){
//     let remainder = num % 10 ;
//     reverse = (reverse * 10) + remainder ;
//     num = Math.floor(num / 10) ;
// }
// if(original==reverse){
//     console.log(" Number is a palindrome number");
// }
// else{
//     console.log(" Number is not a palindrome number");
// }
// output:Number is a palindrome number


// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while loop.
// let n=10;
// let a=0, b=1,next;

// console.log("Fibonacci series up to " + n + ":");

// console.log(a);

// if (n > 1){ 
//   console.log(b);}

// let i=2;
// while(i < n){
//     next = a + b;
//     console.log(next);
//     a=b;
//     b=next;
//     i++
// }
// output : Fibonacci series up to 10: 0 1 1 .......13 21 34



// 6. Write a JAVASCRIPT Program to add all the integers between o and 30 and display the total using do while loop.
// let sum = 0;
// let i = 0;

// do {
//     sum += i;
//     i++;      
// } while (i <= 30);

// console.log("The sum of integers between 0 and 30 is:", sum);
// output:465


// 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop.
// let i = 1; 

// console.log("FizzBuzz from 1 to 100:");

// do {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz"); 
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i); 
//     }
//     i++; 
// } while (i <= 100);
// output:
// FizzBuzz from 1 to 100:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11 ........
// 94
// Buzz
// Fizz
// 97
// 98
// Fizz
// Buzz



// 8. Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop.There will be no hyphen(-) at starting and ending position.
// let result = ""; 
// for (let i = 1; i <= 10; i++) {
//     result += i; 
//     if (i < 10) { 
//         result = result + "-";
//     }
// }

// console.log(result); 
/*
Output : 1-2-3-4-5-6-7-8-9-10
*/



// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop.
// let sum = 0;
// let result = "";

// for (let i = 1; i <= 10; i++) {
//   sum += i * i;
//   result += (i * i);
//   if (i < 10) {
//     result += " + ";
//   }
// }
// result += " = " + sum;
// console.log(result);
// output:1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385
          


// 10. Write a JAVASCRIPT Program that displays below pattern using nested for loop:
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 5; j >= 6 - i; j--) {
//       row += j + " ";
//     }
//     console.log(row);
//     }
//     output:
//     5 
//     5 4 
//     5 4 3 
//     5 4 3 2 
//     5 4 3 2 1 



// 11.Write a JAVASCRIPT Program that displays below pattern using nested for loop: 
// let num = 1;
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += num + " ";  
//     num++;
//   }
//   console.log(row);
// }
// output:
//     1 
//     2 3 
//     4 5 6 
//     7 8 9 10 
//     11 12 13 14 15 