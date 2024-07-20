/* 1. Write a JavaScript function that reverse a number. 
    Example x = 32243;
    Expected Output: 34223 */

// Using string reversal
// const x = 32243;
// let res;
// res = x.toString().split('').reverse().join('');
// console.log(res);

// Using recursion
function reverseRecursion(num, reversed = 0){
    if (num === 0){
        return reversed;
    }

    return reverseRecursion(Math.floor(num / 10), 
    reversed * 10 + num % 10);
}

console.log(reverseRecursion(32243));

/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */


// 2 pointer method
function isPalindrome(str){
    str = str.split(' ').join('');
    let i = 0;
    let j = str.length - 1;

    while (i < j){
        if (str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrome("nurses run"));

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

function generateStrings(str, res =[]){
    for (let i = 0; i < str.length; i++){
        for (let j = 1; j <= str.length - i; j++){
            res.push(str.substr(i, j));
        }
    }
    return res;
}

console.log(generateStrings("dog"));

/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */


function sortString(str){
    return str.split('').sort().join('');
}
console.log(sortString('webmaster'));

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox ' */


function capitaliseString(str){
    str_arr = str.split(" ");
    for (let i = 0; i < str_arr.length; i++){
        str_arr[i] = str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1);
    }
    str = str_arr.join(" ");
    return str;
}
console.log(capitaliseString('the quick brown fox'));

/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development' */

function longestWord(str){
    let ans = "";
    let str_arr = [];
    str_arr = str.split(" ");
    for (let i = 0; i < str_arr.length; i++){
        if (str_arr[i].length > ans.length){
            ans = str_arr[i];
        }
    }
    return ans;
}
console.log(longestWord("Web Development Tutorial"));

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5 */

function countVowels(str){
    const vowels = "aeiouAEIOU";

    let count = 0;

    for (let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("The quick brown fox"));

/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function isPrime(num){
    if (num <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(13));


/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */

function getType(arg){
    return typeof arg;
}
console.log(getType());

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

function getIdentityMatrix(n){
    let matrix = [];
    for (let i = 0; i < n; i++){
        let row = new Array(n).fill(0); // row filled with all 0

        row[i] = 1;                     // diagonal will be set to 1 
        
        matrix.push(row);               // add row to matrix
    }
    return matrix;
}
console.log(getIdentityMatrix(4));