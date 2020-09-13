//Parsing an JSON object’s Values:

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
    return Object.values(obj)
}
console.log(printAllValues(obj))