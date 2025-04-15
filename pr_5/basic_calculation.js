// 1 Write a simple JavaScript program to print expected Output using the following array.
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(','));
// console.log(myColor.join('+'));
// console.log(myColor.slice(0, 3).join(','));
// console.log(myColor[0]);
// console.log(myColor.slice(1, 3).join(','));
// let extendedColor = myColor.slice();
// extendedColor.push("orange");
// console.log(extendedColor.join(','));

// output:
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange


// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.
// let numbers = [1, 7, 2, 9, 1];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     }
//     console.log("Sum using for loop: ", sum);
  
//     sum = 0;
//     numbers.forEach(num => {sum += num;});
//         console.log("Sum using foreach loop: ", sum);

// output:
// Sum using for loop:  20
// Sum using foreach loop:  20


// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
// let numbers = [61, 92, 73, 94, 15];
// let max = findMax(numbers);
// let min = findMin(numbers);
// console.log("Maximum value: ", max);
// console.log("Minimum value: ", min);
// function findMax(arr) {
//     return Math.max.apply(Math, arr);
//     }
//     function findMin(arr) {
//         return Math.min.apply(Math, arr);
//     }

// output:
// Maximum value:  94
// Minimum value:  15

// 4.Write a JavaScript program to convert all array elements into ASCII values.
// let myArray = ["Red", "Green", "White", "Black"];
// let ascii = myArray.map(num => num.toString().charCodeAt(0));
// console.log(ascii);

// output:
// (4) [82, 71, 87, 66]

//5.Write a JavaScript program to remove negative values using the filter arrayfunction.
// let NUM = [-23,-20,-17,-12, -5, 0, 1, 5, 12, 19, 20];
// let positiveNumbers = NUM.filter(NUM => NUM >= 0);
// console.log(positiveNumbers);

// output:
// (6) [0, 1, 5, 12, 19, 20]


//6. Write a JavaScript program using array map() method and return the square of the array element. arr = [2, 5, 6, 3, 8, 9];
// let arr = [2, 5, 6, 3, 8, 9]
// let square = arr.map(num => num * num);
// console.log(square);

//output: [4, 25, 36, 9, 64,81]

//7.Write a JavaScript program for sorting an array in ascending descending.numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];  myColor = ["Red", "Green", "White", "Black"];
// let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];  
// let myColor = ["Red", "Green", "White", "Black"];

// console.log("Ascending Numbers:", numbers.sort((a, b) => a - b));
// console.log("Descending Numbers:", numbers.sort((a, b) => b - a));

// console.log("Ascending Colors:", myColor.sort());
// console.log("Descending Colors:", myColor.sort().reverse());

//output: Numbers in ascending order:  [0, 1, 5, 5, 12, 12, 19, 20]
//        Colors in descending order:  [ "White", "Red", "Green", "Black]


//8. Write a JavaScript program which filters out any string which is less than 8characters. words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
// let filteredWords = words.filter(word => word.length <= 8);
// console.log(filteredWords);

//output :(5) ['Python', 'Go', 'Java', 'PHP', 'Ruby']

// 9. write a JavaScript program to print expected output for the following string.
// x = "airplane"; output:- r
// x = "oxoxoxox"; output:- "oXoXoXoX"
// x = "A New Java Book";
// output:- "a new java book" , "A NEW JAVA BOOK"

// let x = "airplane";
// console.log(x[2]); Output: "r"

// x = "oxoxoxox";
// console.log(x); Output: "oXoXoXoX"

// x = "A New Java Book";
// console.log(x.toLowerCase());  Output: "a new java book"
// console.log(x.toUpperCase()); Output: "A NEW JAVA BOOK"

// 10. write a JavaScript program for array reverse.
// let Array = [1, 2, 3, 4, 5];
// console.log(Array.reverse()); 
// Output: (5) [5, 4, 3, 2, 1]


// 11. write a JavaScript program to check if a value is found or not?
// let myArray = [10, 20, 30, 40, 50];
// let valueToCheck = 30;

// console.log(myArray.includes(valueToCheck)); 
// Output: true


// 12. write a JavaScript program to print your name and write the number of total characters.
// let myName = "priti satani";
// console.log("Name:", myName);
// console.log("Total Characters:", myName.length);
// output:
// Name: priti satani
// Total Characters: 12


// 13. write a JavaScript program given this output using replace concept.Input:"I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// let sentence = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// let replacedSentence = sentence.replace(/dog/g, "cat");

// console.log(replacedSentence);
// output:
// I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning


// 14.write a JavaScript program to convert string to array.Input:-"Hire the top 1% freelance developers"; output:-['Hire', 'the', 'top', '1%']
// let str = "Hire the top 1% freelance developers";
// let wordsArray = str.split(" ").slice(0, 4);
// console.log(wordsArray);
// output:
// (4) ['Hire', 'the', 'top', '1%']


// 15.write a JavaScript program to convert an array to string.Input:-['5', 32, 'Daniel']; output:-5,32,Daniel
// let arr = ['5', 32, 'Daniel'];   
// let strOutput = arr.join(",");
// console.log(strOutput);
// output:
// 5,32,Daniel