//Parsing a list of lists and convert into a JSON object:

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    var newObject = {};
    for(let i of arr){
        console.log(i);
        if(newObject[i] === undefined){
            newObject[i[0]] = i[1];
        }
    }
    return newObject;
}
console.log(fromListToObject(arr));