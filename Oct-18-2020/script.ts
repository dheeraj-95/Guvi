// Chunk

const customChunk = (arr, size) => {
    const newArray = [];
    
    for (let i = 0; i < arr.length; i += size) {
        let arrayChunk = [];

        for (let j = i; j < i + size; j++) {
            if (typeof (arr[j]) !== 'undefined')
                arrayChunk.push(arr[j]);
        }
        newArray.push(arrayChunk);
    }
    return newArray;
};
console.log('Chunk Method');
const arrChunk = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Result of Chunk method is :`);
console.log(customChunk(arrChunk, 6));

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
console.log(`Result of Filter method greater than 5 is : ${arrayFilter([1, 2, 3, 4, 5, 6, 7, 8], 5)}`);


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

console.log('Sum Method');
console.log(`Result of Sum method is : ${arraySum([1, 2, 3, 4, 5, 6, 7, 8])}`);

// Sort unique elements

const arraySortUniq = (arr) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]] === 'undefined'){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
    }
    return Object.keys(obj);

}

console.log('Sort Unique Method');
console.log(`Result of arraySortUniq method is : ${arraySortUniq([1, 1, 3, 4, 5, 6, 7, 8])}`);

// concat Method

const arrayConcat = (arr, arr2) => {
    console.log(arr + ',' + arr2);
};
console.log('CONCAT Method:');
arrayConcat([1,2,3], [5,6,7]);