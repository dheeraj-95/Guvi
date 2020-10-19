// Chunck
var customChunck = function (arr, size) {
    var newArray = [];
    for (var i = 0; i < arr.length; i += size) {
        var arrayChunck = [];
        for (var j = i; j < i + size; j++) {
            if (typeof (arr[j]) !== 'undefined')
                arrayChunck.push(arr[j]);
        }
        newArray.push(arrayChunck);
    }
    return newArray;
};
console.log('Chunck Method');
var arrChunck = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Result of Chunck method id :");
console.log(customChunck(arrChunck, 6));
// Reduce
var arrayReduce = function (arr, accumulator) {
    for (var i = 0; i < arr.length; i++) {
        accumulator += arr[i];
    }
    return accumulator;
};
console.log('REDUCE Method');
console.log("Result of Reduce method id : " + arrayReduce([1, 2, 3, 4, 5, 6, 7, 8], 2));
// Filter
var arrayFilter = function (arr, value) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};
console.log('Filter Method');
console.log("Result of Filter method is : " + arrayFilter([1, 2, 3, 4, 5, 6, 7, 8], 5));
// Find
var arrayFind = function (arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > element) {
            console.log("Result of Find Method in " + arr + " greater than " + element + " is " + arr[i]);
            break;
        }
    }
};
arrayFind([1, 2, 3, 4, 5, 6, 7, 8], 4);
