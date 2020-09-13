//Parsing an JSON object’s Keys:
var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllKeys(obj) {
	return Object.keys(obj);
}
console.log(printAllKeys(obj));