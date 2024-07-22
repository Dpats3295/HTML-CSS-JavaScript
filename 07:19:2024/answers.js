/* 1. Write a JavaScript function that reverse a number. 
    Example x = 32243;
    Expected Output: 34223 */

// Using string reversal
// const x = 32243;
// let res;
// res = x.toString().split('').reverse().join('');
// console.log(res);

// Using recursion
// function reverseRecursion(num, reversed = 0){
//     if (num === 0){
//         return reversed;
//     }

//     return reverseRecursion(Math.floor(num / 10), 
//     reversed * 10 + num % 10);
// }
// console.log(reverseRecursion(32243));


/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */

// 2 pointer method
// function isPalindrome(str){
//     str = str.split(' ').join('');
//     let i = 0;
//     let j = str.length - 1;

//     while (i < j){
//         if (str[i] !== str[j]){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }
// console.log(isPalindrome("nurses run"));

// Recursion
// function isPalindromeRecursion(str){
//     str = str.split(' ').join('');
//     return helper(str);

//     function helper(str, start = 0, end = str.length -1){
//         if (start >= end){
//             return true;
//         }
    
//         if (str[start] !== str[end]){
//             return false;
//         }
    
//         return helper(str, start + 1, end -1);
//     }
// }
// console.log(isPalindromeRecursion("nurses run"));


/* 3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g */

// function generateStrings(str, res =[]){
//     for (let i = 0; i < str.length; i++){
//         for (let j = 1; j <= str.length - i; j++){
//             res.push(str.substr(i, j));
//         }
//     }
//     return res;
// }
// console.log(generateStrings("dog"));


/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */

// function sortString(str){
//     return str.split('').sort().join('');
// }
// console.log(sortString('webmaster'));


/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first 
letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox ' */

// function capitaliseString(str){
//     let str_arr = str.split(" ");
//     for (let i = 0; i < str_arr.length; i++){
//         str_arr[i] = str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1);
//     }
//     str = str_arr.join(" ");
//     return str;
// }
// console.log(capitaliseString('the quick brown fox'));


/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development' */

// function longestWord(str){
//     let ans = "";
//     let str_arr = [];
//     str_arr = str.split(" ");
//     for (let i = 0; i < str_arr.length; i++){
//         if (str_arr[i].length > ans.length){
//             ans = str_arr[i];
//         }
//     }
//     return ans;
// }
// console.log(longestWord("Web Development Tutorial"));


/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5 */

// function countVowels(str){
//     const vowels = "aeiouAEIOU";

//     let count = 0;

//     for (let char of str){
//         if (vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("The quick brown fox"));


/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

// function isPrime(num){
//     if (num <= 1){
//         return false;
//     }

//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if (num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(13));


/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */

// function getType(arg){
//     return typeof arg;
// }
// console.log(getType());


/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

// function getIdentityMatrix(n){
//     let matrix = [];
//     for (let i = 0; i < n; i++){
//         let row = new Array(n).fill(0); // row filled with all 0

//         row[i] = 1;                     // diagonal will be set to 1 
        
//         matrix.push(row);               // add row to matrix
//     }
//     return matrix;
// }
// console.log(getIdentityMatrix(4));


/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest 
and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 */

// function secondLowestAndGreatestNum(array){
//     let ans = [];
//     array = array.sort(function (a, b){return a-b});
//     ans.push(array[1]);
//     ans.push(array[array.length - 2]);
//     return ans;
// }
// console.log(secondLowestAndGreatestNum([1,2,3,4,5]));


/* 12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its 
proper positive divisors, that is, the sum of its positive divisors excluding the number itself 
(also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its 
positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

// function isPerfectNum(num){
//     if (num <= 1){
//         return false;
//     }
//     let sum = 0;

//     for (let i =1; i <= num / 2; i++){
//         if (num % i === 0){
//             sum += i;
//         }
//     }
//     return sum === num;
// }
// console.log(isPerfectNum(496));


/* 13. Write a JavaScript function to compute the factors of a positive integer. */

// function getFactors(num){
//     let factors = [];

//     for (let i = 1; i <= num / 2; i ++){
//         if (num % i === 0){
//             factors.push(i);
//         }
//     }
//     factors.push(num);

//     return factors;
// }
// console.log(getFactors(100));


/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1 */

// function amountToCoins(amount, coins){
//     let result = [];
//     coins = coins.sort(function (a, b){return b-a});

//     for (let coin of coins){

//         while (amount >= coin){

//             result.push(coin);
//             amount -= coin;
//         }
//     }
//     return result;
// }
// console.log(amountToCoins(46, [1, 25, 10, 5, 2]));


/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
Accept b and n from the user and display the result. */

// function computePower(){
//     let base = parseFloat(prompt("Enter the base (b):"));

//     let exponent = parseInt(prompt("Enter the exponent (e):"));

//     let result = Math.pow(base, exponent);

//     console.log(`${base}^${exponent} = ${result}`);
// }
// computePower();


/* 16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg" */

// function uniqueChar(str){
//     let result = "";
//     for (let char of str){
//         if (!result.includes(char)){
//             result += char;
//         }
//     }
//     return result;
// }
// console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));


/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. */

// function frequencyCount(str){
//     let result = new Map();
//     for (let char of str){
//         result.set(char, (result.get(char) || 0) + 1);
//     }
//     return result;
// }
// console.log(frequencyCount("aabcccddd"));


/* 18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value. */

// function binarySearch(array, num){
//     let start = 0;
//     let end = array.length - 1;
//     array = array.sort(function (a, b){return a-b});

//     while (start <= end){
//         const mid = start + Math.floor((end - start) / 2);
        
//         if (array[mid] === num){
//             return true;           // return mid if you need index of number
//         }else if (array[mid] > num){
//             end = mid -1;
//         }else {
//             start = mid + 1;
//         }
//     }
//     return false                  // return -1 if number is not found
// }
// // this function returns if number is there or not.
// console.log(binarySearch([1,2,10,4,6,7], 2));


/* 19. Write a JavaScript function that returns array elements larger than a number. */

// function largerElements(array, num){
//     let result = [];
//     for (let x of array){
//         if (x > num){
//             result.push(x);
//         }
//     }
//     return result;
// }
// console.log(largerElements([1,2,10,4,6,7], 3));


/* 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */

// function generateId(n){
//     const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let result = "";
//     const list_len = char_list.length;

//     for (let i = 0; i < n; i++){
//         result += char_list.charAt(Math.floor(Math.random() * list_len));
//     }
//     return result;
// }
// console.log(generateId(12));


/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]] */

// function getSubsets(array, len){
//     const result = [];

//     function helper(start, subset){

//         if (subset.length === len){
//             result.push([...subset]);
//             return;
//         }

//         for (let i = start; i < array.length; i++){
//             subset.push(array[i]);
//             helper(i + 1, subset);
//             subset.pop();
//         }
//     }
//     helper(0, [])
//     return result;
// }
// console.log(getSubsets([1, 2, 3], 2));


/* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count 
the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 */

// function countOccurence(str, letter){
//     let count = 0;
//     for (let char of str){
//         if (char === letter){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOccurence('microsoft.com', 'o'));


/* 23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' */

// function findNotRepeatedChar(str){

//     let char_count = new Map();

//     for (let char of str){
//         char_count.set(char, (char_count.get(char) || 0) + 1);
//     }

//     for (let char of str){
//         if (char_count.get(char) === 1){
//             return char;
//         }
//     }
//     return null;
// }
// console.log(findNotRepeatedChar('abacddbec'));


/* 24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm 
that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping 
them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] */



/* 25. Write a JavaScript function that accept a list of country names as input and returns 
the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America" */

// function longestCountryName(array){
//     let result = "";
//     for (let country of array){
//         if (country.length > result.length){   // if you want to ignore space use country.split(" ").join("").length
//             result = country;
//         }
//     }
//     return result;
// }
// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));


/* 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. */
// 'abacddbec'

// Using sliding window
// function longestSubstring(str){
//     let start = 0;
//     let end = 0;
//     let i = 0;
//     let j = 0;
//     let dict = new Map();

//     while (j < str.length){
//         dict.set(str[j], (dict.get(str[j]) || 0) + 1);  // add char to map

//         if (dict.size === j - i + 1){             // if map size is equal to window size all characters are unique in window

//             if ((j - i + 1) > (end - start + 1)){
//                 start = i;
//                 end = j;
//             }
//         } else if (dict.size < j - i + 1){       // if map size is less than window size move start for shortening the window

//             while (dict.size < j - i + 1){
//                 dict.set(str[i], dict.get(str[i]) - 1);

//                 if (dict.get(str[i]) === 0){
//                     dict.delete(str[i]);
//                 }
//                 i++;
//             }
//         }
//         j++;
//     }
//     return str.slice(start, end + 1);
// }
// console.log(longestSubstring("abacddbeca"));


/* 27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric 
factor problem is the problem of finding a maximum-length contiguous substring of a given string that is 
also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest 
palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no 
palindromic substring with length greater than three, but there are two palindromic substrings with length three, 
namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings 
that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning 
only one substring or returning the maximum length of a palindromic substring. */


// function longestPalindrome(str){

//     function isPalindrome(str, start, end){
//         if (start >= end){
//             return true;
//         }
        
//         if (str[start] !== str[end]){
//             return false;
//         }

//         return isPalindrome(str, start+1, end-1); 
//     }

//     let result = "";

//     for (let i = 0; i < str.length; i++){
//         for (let j = i; j < str.length; j++){

//             if (isPalindrome(str, i , j) && (j - i + 1 > result.length)){
//                 result = str.slice(i, j+1);
//             }
//         }
//     }

//     return result;
// }
// console.log(longestPalindrome("bananas"));

/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */

// function performFunction(func, a, b){
//     return func(a,b);
// }

// function addNumber(a,b){
//     return a + b;
// }

// console.log(performFunction(addNumber, 4, 5));

/* 29. Write a JavaScript function to get the function name. */

// function getFunctionName(func){
//     return func.name;
// }

// console.log(getFunctionName(Math.max));