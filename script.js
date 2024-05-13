/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if(age >= 18){
        return 'Adult'
    } else {
        return 'Minor'
    }
}


console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
    if(char === 'a') {
        return 'True'
    } else if (char === 'e') {
        return 'True'
    } else if (char === 'i') {
        return 'True'
    } else if (char === 'o') {
        return 'True'
    } else if (char === 'u') {
        return "true"
    } else {
        return 'Flase'
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("Michael", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, timeOfDay) => {
    const greetings = {
        morning:'Good morning',
        afternoon: 'Good afternoon',
        evening: 'Good evening' 
    }
    const greeting = greetings[timeOfDay];
    return `${greeting}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Michael", "afternoon"));

/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

const reverseString = (str) => {
    return str.split('').reverse().join(''); // found this line to reverse a string on freecodecamp.com. split():divides the string into an arrat of characters. reverse() reverses that array. join() puts it back together. 
}


console.log('Exercise 6 Result:', reverseString("rockstar"));

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

const checkPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
} 

console.log('Exercise 7 Result:', checkPalindrome("taco"));

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x, y, z) => {
    let max = x;
    if (y >= x) {
        max = y;
    } 
    if (z >= max) {
        max = z;
    }
    return max;
}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));

/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tipPercent) => {
    const totalTip = billAmount * (tipPercent / 100);
    return totalTip;
}

console.log('Exercise 9 Result:', 'Total tip is $', calculateTip(50, 20));

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperature, scale) => {
    if (scale === 'C') {
        return (temperature * 9/5) + 32; // found conversion formula by googling
    } else if (scale === 'F') {
        return (temperature - 32) * 5/9;
    }  
}

console.log('Exercise 10 Result:', convertTemperature(32, 'F'));

/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2; 
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num1 / num2;
    }
}


console.log('Exercise 11 Result:', basicCalculator(10, 5, "subtract"));

/*
Exercise 12: calculateGrade()

Define a function called calculateGrade. It should take a numerical score and return the corresponding letter grade (A, B, C, D, F). For example, 90 and above yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >=60) {
        return 'D';
    } else if (score <=59) 
        return 'F';
}

console.log('Exercise 12 Result:', calculateGrade(45));

/*
Exercise 13: createUsername()

Define a function called createUsername. It should take a first name and a last name and return a username. The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/



//console.log('Exercise 13 Result:', createUsername("Samantha", "Green"));

/*
Exercise 14: numArgs()

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/



//console.log('Exercise 14 Result:', numArgs(1, 2, 3, 4));

/*
Exercise 14: numArgs()

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/



//console.log('Exercise 14 Result:', numArgs(1, 2, 3, 4));
