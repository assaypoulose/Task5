
//Anonymous functions and IIFEs:

// Print odd numbers in an array

(function() {
    console.log("1.Print odd numbers in an array")
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    (function(arr) {
        arr.forEach(function(number) {
            if (number % 2 !== 0) {
                console.log(number);
            }
        });
    })(numbers);
})();

  
  // Convert all the strings to title caps in a string array
  (function() {
    console.log("2.Using an anonymous function and IIFE to convert strings to title case")
    var stringArray = ["hello", "world", "javascript", "example"];
    (function(arr1) {
        for (var i = 0; i < arr1.length; i++) {
            arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1).toLowerCase();
        }
    })(stringArray);
    console.log(stringArray);

})();

  
  // Sum of all numbers in an array
  (function() {
    var numbers = [1, 2, 3, 4, 5];
    console.log("3.Using an anonymous function and IIFE to calculate the sum of numbers");
    var sum = (function(arr) {
        var result = 0;
        arr.forEach(function(number) {
            result += number;
        });
        return result;
    })(numbers);

    console.log("Sum of numbers:", sum);
})();

  // Return all the prime numbers in an array
  (function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("4.Using an anonymous function and IIFE to find and return prime numbers");
    var primes = (function(arr) {
        function isPrime(num) {
            if (num < 2) {
                return false;
            }
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        return arr.filter(function(number) {
            return isPrime(number);
        });
    })(numbers);

    console.log("Prime numbers:", primes);
})();

  // Return all the palindromes in an array
  (function() {
    var words = ["level", "deed", "hello", "radar", "world"];
console.log("5.Using an anonymous function and IIFE to find and return palindromes");
    var palindromes = (function(arr) {
        function isPalindrome(word) {
            return word === word.split("").reverse().join("");
        }

        return arr.filter(function(word) {
            return isPalindrome(word);
        });
    })(words);

    console.log("Palindromes:", palindromes);
})();

  
  // Return median of two sorted arrays of the same size
  (function() {
    var array1 = [1, 3, 5];
    var array2 = [2, 4, 6];
console.log("6.sing an anonymous function and IIFE to find the median of two sorted arrays");
    var findMedian = (function(arr1, arr2) {
        var mergedArray = arr1.concat(arr2);
        mergedArray.sort(function(a, b) {
            return a - b;
        });

        var length = mergedArray.length;
        if (length % 2 === 0) {
            // If the length is even, average the middle two elements
            return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
        } else {
            // If the length is odd, return the middle element
            return mergedArray[Math.floor(length / 2)];
        }
    })(array1, array2);

    console.log("Median:", findMedian);
})();

    // Using an anonymous function and IIFE to remove duplicates

(function() {
    var arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1];
console.log("7. Using an anonymous function and IIFE to remove duplicates");
    var uniqueArray = (function(arr) {
        return arr.filter(function(value, index, self) {
            return self.indexOf(value) === index;
        });
    })(arrayWithDuplicates);

    console.log("Array with duplicates:", arrayWithDuplicates);
    console.log("Array without duplicates:", uniqueArray);
})();


// Using an anonymous function and IIFE to rotate the array by k times
(function() {
    var originalArray = [1, 2, 3, 4, 5];
    var k = 3;
console.log("8.Using an anonymous function and IIFE to rotate the array by k times");
    var rotatedArray = (function(arr, rotations) {
        var len = arr.length;
        rotations = rotations % len; // To handle cases where k is greater than the array length

        // Use Array.slice() to split and rearrange the array
        var rotatedPart = arr.slice(0, len - rotations);
        var remainingPart = arr.slice(len - rotations);

        return remainingPart.concat(rotatedPart);
    })(originalArray, k);

    console.log("Original Array:", originalArray);
    console.log("Rotated Array by", k, "times:", rotatedArray);
})();


//-------------------------------------------------//

//a. Print odd numbers in an array:
const printOddNumbers = (arr) => {
    arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));
  };

  //b. Convert all the strings to title caps in a string array:
  const convertToTitleCaps = (arr) => {
    const titleCaps = arr.map(str => str.replace(/\b\w/g, l => l.toUpperCase()));
    return titleCaps;
  };

  //c. Sum of all numbers in an array:
  const sumOfNumbers = (arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum;
  };

  //d. Return all the prime numbers in an array:
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getPrimeNumbers = (arr) => {
    const primes = arr.filter(isPrime);
    return primes;
  };

  //e. Return all the palindromes in an array:
  const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const getPalindromes = (arr) => {
    const palindromes = arr.filter(isPalindrome);
    return palindromes;
  };