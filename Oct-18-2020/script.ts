// Chunck

const customChunck = (arr, size) => {
    const newArray = [];
    
    for (let i = 0; i < arr.length; i += size) {
        let arrayChunck = [];

        for (let j = i; j < i + size; j++) {
            if (typeof (arr[j]) !== 'undefined')
                arrayChunck.push(arr[j]);
        }
        newArray.push(arrayChunck);
    }
    return newArray;
};
console.log('Chunck Method');
const arrChunck = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Result of Chunck method id :`);
console.log(customChunck(arrChunck, 6));

// Reduce

const arrayReduce = (arr, accumulator) => {
    for (let i = 0; i < arr.length; i++) {
        accumulator += arr[i];
    }
    return accumulator;
};
console.log('REDUCE Method');
console.log(`Result of Reduce method id : ${arrayReduce([1, 2, 3, 4, 5, 6, 7, 8], 2)}`);

// Filter

const arrayFilter = (arr, value) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > value){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log('Filter Method');
console.log(`Result of Filter method is : ${arrayFilter([1, 2, 3, 4, 5, 6, 7, 8], 5)}`);


// Find

const arrayFind = (arr, element) => {
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > element){
            console.log(`Result of Find Method in ${arr} greater than ${element} is ${arr[i]}`);
            break;
        }
    }
}
arrayFind([1, 2, 3, 4, 5, 6, 7, 8], 4);

// Sum

const arraySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}