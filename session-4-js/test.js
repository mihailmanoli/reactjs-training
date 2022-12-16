// console.log(45);

// let cars = '10';
// let humans = 10;

// console.log(cars == humans); // validate value;
// console.log(cars === humans); // validate value and type;

// const calculateWeeklyKm = () => {
//     console.log("welcome mihail");
//     return "58k";
// }

// let kms = calculateWeeklyKm();
// console.log(`weekly km: ${kms}`);

// let fruits = ["mar", "para", 20, {name: "Mihail"}];
// let vegetables = [fruits, ["tomato", "broccolli"]]
// console.log(vegetables);

// fruits[0] = "orange";
// console.log(fruits);

// console.log(fruits.length)

// let orange = fruits.filter(el => el === "orange")
// console.log(orange)

// let arr1 = [1, 2, 3, 4];
// let arr2 = ['a', 'b', 'c'];

// let allElements = [...arr1, ...arr2];
// console.log(allElements)


// practice

message = (first, second) => {
    if (first > 30 && first < 60 && second > 30 && second < 60) {
        return "In interval";
    } else if ((firstInterval = (first > 30 && first < 60))
        || (secondInInterval = (second > 30 && second < 60))) {
        return firstInterval ? "Element " + first + " in interval" : `Element ${second} in interval`;
    } else {
        return "No in interval";
    }
}

console.log(message(52, 70));
console.log(message(70, 32));

transform = (input) => {
    let firstLetter = input.charAt(0);
    return firstLetter.toUpperCase() + input.substring(1);
}

console.log(transform("mihail"));

array1 = [4,9,2,3,6];
array2 = [8,22,5,6,11,13];
//sum=[12,31,7,9,17,13]

sumArrayElementsSamePosition = (arr1, arr2) => {
    // TODO: improve it
    let greater = arr1.length > arr2.length ? arr1 : arr2;
    let result = []
    for(i = 0; i < greater.length; i++) {
        result[i] = arr1[i] + arr2[i];
    }
    return result;
}

console.log(sumArrayElementsSamePosition(array1, array2));

arrMultipleElements = ["asdf", 0, 26, false, -22, true, '',undefined, 30, null];
//result=[0,26,-22,30]

extractNumbers = (arr1, type) => {
    return arr1.filter(el => typeof el === type)
}

console.log(extractNumbers(arrMultipleElements, "string"))

numbers= [1,22,10,14,30,70] 
// sum = 24 
// indecii: 2,3

funMathNot = (arr, elSum) => {
    result = []
    for(i = 0; i < arr.length - 1; i++) {
        for(y = i+1; y < arr.length; y++) {
            if(arr[i]+ arr[y] === elSum) {
               result.push([i, y])
            }
        }
    }
    return result;
}

console.log(funMathNot(numbers, 24));