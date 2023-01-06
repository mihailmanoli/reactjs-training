// practice

// message = (first, second) => {
//     if (first > 30 && first < 60 && second > 30 && second < 60) {
//         return "In interval";
//     } else if ((firstInterval = (first > 30 && first < 60))
//         || (secondInInterval = (second > 30 && second < 60))) {
//         return firstInterval ? "Element " + first + " in interval" : `Element ${second} in interval`;
//     } else {
//         return "No in interval";
//     }
// }

// console.log(message(52, 70));
// console.log(message(70, 32));

// transform = (input) => {
//     let firstLetter = input.charAt(0);
//     return firstLetter.toUpperCase() + input.substring(1);
// }

// console.log(transform("mihail"));

// array1 = [4,9,2,3,6];
// array2 = [8,22,5,6,11,13];
// //sum=[12,31,7,9,17,13]

// sumArrayElementsSamePosition = (arr1, arr2) => {
//     // TODO: improve it
//     let greater = arr1.length > arr2.length ? arr1 : arr2;
//     let result = []
//     for(i = 0; i < greater.length; i++) {
//         result[i] = arr1[i] + arr2[i];
//     }
//     return result;
// }

// console.log(sumArrayElementsSamePosition(array1, array2));

// arrMultipleElements = ["asdf", 0, 26, false, -22, true, '',undefined, 30, null];
// //result=[0,26,-22,30]

// extractNumbers = (arr1, type) => {
//     return arr1.filter(el => typeof el === type)
// }

// console.log(extractNumbers(arrMultipleElements, "string"))

// numbers= [1,22,10,14,30,70] 
// // sum = 24 
// // indecii: 2,3

// funMathNot = (arr, elSum) => {
//     result = []
//     for(i = 0; i < arr.length - 1; i++) {
//         for(y = i+1; y < arr.length; y++) {
//             if(arr[i]+ arr[y] === elSum) {
//                result.push([i, y])
//             }
//         }
//     }
//     return result;
// }

// console.log(funMathNot(numbers, 24));

findSubstr = (first, other) => {
    return first.indexOf(other) > 0 
        ? other + " found in " + first 
        : "not found";
}

console.log(findSubstr("mihail", "il"));

// problem 2
countSmaller = (numbers, value) => {
    return numbers.filter(el => el < value).length
}

countGreater = (numbers, value) => {
    return numbers.filter(el => el > value).length
}

mathForTheWin = (numbers, value) => {
    const totalSmaller = countSmaller(numbers, value);
    const totalGreater = countGreater(numbers, value);

    return [(totalSmaller * 100 / numbers.length) + "%", 
            (totalGreater * 100 / numbers.length) + "%"]
}

mathForTheWinReduce = (numbers, value) => {
    const ratio = numbers.reduce(
        (accumulator, currentValue) => {
            accumulator[0] += currentValue < value ? 0 : 1;
            accumulator[1] += currentValue > value ? 0 : 1;
            return accumulator;
        }, 
        [0, 0]
    );

    return [(ratio[0] * 100 / numbers.length) + "%", 
            (ratio[1] * 100 / numbers.length) + "%"]
}

const  input1 = [1, 2, 3, 4, 5, 6, 7, 10]

console.log(mathForTheWinReduce(input1, 5))


// problem 3
displayAtPosition = (input, index) => {
    return index >= 0 && index < input.length ? input[index] : "out of index";
}

const  input2 = ["Ana", "Mihail", "John"]
console.log(displayAtPosition(input2, 2))
console.log(displayAtPosition(input2, 10))