//Parsing a list and transform the first and last elements of it:
var arr = ['GUVI', 'I', 'am', 'a geek'];

function transformFirstAndLast(arr) { 
    var obj = {}
    if(obj[arr[0]] === undefined){
        obj[arr[0]] = arr[arr.length-1];
    }
    
    return obj;
}
console.log(transformFirstAndLast(arr));